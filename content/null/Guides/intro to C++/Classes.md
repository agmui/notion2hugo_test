---
sys:
  pageId: "2329c1cd-96c8-4fd3-a4f3-9920d69d1c8a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-11-08T18:33:00.000Z"
  propFilepath: "null/Guides/intro to C++/Classes.md"
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
      <summary>What is </summary>
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYKTDWAO%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQDybWlWDNk9vcpJxzGByDjp3551XGVXkXSzclZNuGK8bQIhAMjRJ1hfIQhcM8oDcSMRwTGcqTRzlH6QALwZo%2B5GGJRQKv8DCEAQABoMNjM3NDIzMTgzODA1IgyJZckVRRygbGcGHO0q3AOkne1mmvZLgF59yLBI6ZRltJfyexUeXvl0KptMAFR7PbtXJe0kQZo6wMmuCsEDWW89rzBfCG6te5IEAR5cikMinjH2bTZw%2B1%2B8gSlNyNt%2F6K7B4kYLV47CUp94AySVQZTNBnpfX4nDlh4LxDVAQlskcdXg6J7w62CZfE0WTAca3qWwL%2F0WfSl2c5luHiK%2F%2BQqfpw%2F6sKgyO44EvNMihRrDprlU8rl8uhZ4%2FVxFU%2F3tQoBmK3Fpt%2Fjnm5ryLy%2FtFyRyAbkdK5IBRUlwyHIKt55RN0%2FU25LL%2BiX685%2BEizVU41%2B5RtaIXpvM4GGSkqtSjMPdVsqJZBGdZxR3sRCJnn4SIKEYufWVXiZ2XaCHVKztOEmofMJ2aeiHz1pM4QtrZjKXJn1HD1Aum%2B34z9IijAvuwqVvlzm98LCy3RifqIvm00XT1x8UnrL1QhVpEhFhzK70I1mt9xox5zx7HOzkCZFLlrKaaXGJ5t%2BHoIs56uDZqPpvfQih1zvpQ%2FbQdGCI87DdUoLMLH2Tv1tEXpAnYOQsUaU906IMF1e2KdcxdMLbC4knkiJUeObQH%2FnglHNXkby8zGX3umt03JN%2BZClSEaSBCQCqF%2BQBCKFo5JTy971xKTo%2FQ5AywpRJLnmxgTDAl4y9BjqkATjpMSQPz8CR52vFWpLYPu8OdGlst1aish5IYTSMmUIcTrUKkFcYj68nQHQGODQcE%2B1pSL%2Bvw9TnofhxDyMR4kKorK%2BOfzR5APmxYgwb%2FkjULuyH2DMXYDIhTRZBjZr5yjTE5Uiz5TPWvEISCHQrfmsfxGMMv8tAxJAfNNObvsa8xXa8TRqJd%2FiFbjNrkW2wPglj9Bbq5pHUT6oKido2i6gMeGqv&X-Amz-Signature=f3ab9b490dffa1d84af4f89a7292282c7a9f50f31d94eae3abfa2d36318f3a1b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
