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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IXGUMMK%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHQNl6UclYSkTtkZQ91Q4X%2FQVc9xMx9doToMesMaCCU%2BAiBeSbzWqCwoKVgry7iTOg4Gl7uqjjYDEummo9sS0ain2ir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM28uvh%2Fk9xXL1E57xKtwDtwo7KVwV4dynIx11atgbEJVg6CemNOu4s6HpWGUpYc8Y7jv0UK6Cp9VLuHKHw%2FkOqJWyIq5uXNHfzXetUeCjc4%2BpP1bdW2VRu5CGplYoIR9%2F9AJ%2F444MFWePIn0td8BQftYCEA%2Fg9ifo%2BRO8JofIYn8Hf2Sgd5o32HHXri2jcfsUC54dwq0dafLTQp7XtanK%2B%2FVMC5tIwxyEhGrUE2ZgtbYML3R2%2FzSJCqaCzX0e8rCLy1rYW9JJHTZXUFhpdl%2BqIN5XeBH1I3t2I3imErecVM9fwk9YTT42ls6jKHXoeVyrP%2FNy7C7KvFZ5wnXKWUWUBJtZNYH6KM36XXPajcG3BYwcxCUPsCA6DQFdQL7ROag1GEzX94gHHYbVotMZoUfekwvgLuvm23l14%2FrCYhUDBm%2BwFgYo8Z3CF0l6sdgLT1H333wJKZscgjgbVzaWa5IkLjdd4FwctK%2FrESIx01aYBn7RCBHtTB5G3XKVWGOz%2B2LeMhD6XVO8KSI7WqLYBpoGVbThtpJ14qq07%2BS6icoNsdLtIl850cN8Bb6hz%2BTHyKzWoTOUXaZgWUYsA3bW2W0yDWAwlq4ScUJGw%2BCOACTTNcDQOur37TgewGgi9RYCpiX6DKBNG5UreIkfen4w3svO1AY6pgGh9GLvJDe4zSho9fNGyqoH1%2B1QOVelPiqUOTkd%2F3W2VTeHmJtmVg6b4QF5bN9oFGZI7TNLyrJP%2FTycbFFtI7kCqnrsEg0aYNfh0m%2FUfMIv07OTwDUExBE6JinjgYOkdIaiiwC6DTYQuCdKnQml0VtuSdIscDiOQ0u4MuIVPoQDCQhD%2Bshr4UQFF9tmGvYKi8AWzfYEnz5ttyqC9QF1YtU7EZJDpnJK&X-Amz-Signature=de23a421ecc1064bfb8c77f0253fe61f4d14413c8d248980359e52142f5daa38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
