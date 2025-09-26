---
sys:
  pageId: "2329c1cd-96c8-4fd3-a4f3-9920d69d1c8a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-11-08T18:33:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Classes.md"
title: "Classes"
date: "2024-11-08T18:33:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 113
toc: false
icon: ""
---

## basic class template

```cpp
class Milk {
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {

    }
    ~Milk() {} // deconstructor
    void drink(int galOfPilk) {
        printf("drinking %dL of Milk\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};

int main(){
	Ilk i;
	i.drink(1);
	
	Ilk* i = new Milk();
	i->drink(1); // arrow syntax when i is a pointer
	i->~Milk();
}
```

<details>
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
 `~Milk()`is a [de-constructor](https://www.geeksforgeeks.org/destructors-c/#) (its basically like `free()` in c). Unlike Java or python, C++ is not garbage collected so when we make an object we have to also manually delete it. The computer does not magically make it go away when you are done with it.

</details>



## [Inheritance](https://www.geeksforgeeks.org/inheritance-in-c/)

```cpp
class A{
	...
};

class B: public A{
	...
};
```

### Creating objects

```cpp
int main(){
	Person* p = new Person(1,2,3); // heap allocated
	Person p2(1,2,3);      // stack allocated
}
```

```cpp
class A{
public:
	A(){
		...
	}
};
int main(){
	A a; // Note: if your constructor does not take any arguments
}
```

> Note: you will learn what stack and heap are in CSSE132 but for now we generally use stack allocated in Robomasters

Why use stack over heap?:

This is what the `new` operator calls when ever it gets used.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEGRPUKX%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSHGPmLYaiVYzMfX8G76tppCFbQ%2Bc3YLiztMuUPFNq2QIhAMVZVgY2jVngtCvpUPH9r3YIyXIhLPmd%2B0jy%2B3G0uXYEKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyoMcPJhqYfnciqpTEq3AM4SYeKNxUaytsaVLsTuFYDabpanQHZHtiYrLyCnGGG4n9wO5%2F71NKnExJNX4wipRM5WhwqyNLxBVEmMXhJt8hRd%2F%2BmyXWTbT68q%2FnfEI9KEpGwMZQddQXCexuFiHwmMcw1dmGU4MMUAPdBsh9mtTLqXeZjweCzfb1gt5q1SA1IAm9vbINxeLx4b5G%2FfhjGPVFNorr7NYbGQccksL5sENcjzcrg0WUdjuWJBGjiyvx5VIq7oA5yRbt7FMMdsMBINNK%2BJEW29Y65UOYVgsC4N0QmasM1Oj1p2QbLfJu%2Fkzr2B4zIXS%2Fd%2BWEM%2BnBHy8jwOUxiq2DbyLfKz83Y7qOYu06sugbe7RQgu57w9eqtfCAjRFmKWsvQ8RoZosIRvSqeawrbOgQmJGBQtt%2BVNLMiKXNANtgiZ9RoEuqni1GhkMthAHnMRRaSNPQNpiiNiWOoYeqlE5tioqGKXPQyV6zkpK8WnHeOl65ppb6yC5x39IJNP4mzpD8hdTsEJVkxZBCGinESHA%2BIbkko1RJMw2IkJ09KoiVkSZf6BYx7rOydWZZbKBReqml6TvIVFxoF2MZT%2B3lpBDq%2FjIZLXydgPUQmn7GrJoln7dDAbww8gcb8ABXwmhky4Xy%2BJN7R6LUrRjD6p9fGBjqkASDEx5b1tgkONJHVgEr274UVFB5%2F94rKugoopYCMqvYmNy%2ByY%2Bfkz5hg5lRDfjFdolf2ChmEUOZ8Ruv4dsUt7%2BVYeMuMSB7E%2FjpxYe4jiq3Ani0BFKIMq7wV4rHnmDbFptuOqCb3UB8CdQIylC4g0M0fWjB0pPRsiwr9Snnq628vK54OZFgJPGCr8jeR7RaZATDU34IcJ3mQGzRsTw0ETtV75nWq&X-Amz-Signature=77c1e0861a499caadafa3182c7d960ce85259cd169a2c4a209a366010d3a74f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Constructors

For constructors, there are 2 ways of doing it

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
		MyClass myClass;
	public:
		Person(int age, int height, int weight){
			this->age = age;
			this-> height = height;
			this->weight = weight;
			this->myClass(69);
		}
};
```

 _constructor initializer list:_

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
	public:
		Person(int age, int height, int weight):age(age),height(height),weight(weight), myClass(69)
		{
			...
		}
};
```

We generally use the second form because

## NOTE: YOU CANT CALL CONSTRUCTORS WHEN DECLARED!!!

All together

```cpp
#include <iostream>
#include <string>

using namespace std;

class Milk
{
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {
    }
    ~Milk() {}
    void drink(int galOfPilk) {
        printf("drinking %dL of PILK\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};
class Pilk : public Milk // inheritance
{
private:
    string cola;
    int numDrinks;
public:
    Pilk(string cola, int numDrinks, int milk)
        : cola(cola),
          numDrinks(numDrinks),
          Ilk(milk)
    {
        printf("pilk\n");
    }
    string getCola() {
        return cola;
    }
};

int main()
{
    Ilk *i = new Ilk(420);
    i->getMilk();
    Pilk p("coco cola", 420, 2);
    p.drink(1337);
    i->~Ilk();
}

```

## TODO: explain → arrow syntax

# Exercise:

make 2 classes:

- Car
	- string name
	- getName()
- Vehicle
	- int id
	- void drive() // prints "vroom"
