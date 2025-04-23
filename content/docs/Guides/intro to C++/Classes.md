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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QIOF7JP%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T140851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCpZV8VhyzPFJOD0BcKrs9ICr%2Ft%2FEZZogKB%2F8Z%2BrSvBLQIgO116n2rvs5ZHVHJa1znLjUeOR7%2Fj4qlvZNkFBv54iFwqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBvC8Xt94ocSd3arrCrcA1ZQnYyg9MFIek%2FyH2LhccbJcOF1xSNHJO5DyQ%2BdD1PAM6U17Iin76fWjwS3fAn20dpHtpaRq7tgBdkvHfP3WVAEIMcT0KJxmB1r32ny%2BRUQh9OeTO86lenMCGM5faI4v%2B1wS9OTmUZlnThBcObQeWHTOSF0ShtCYuIX3IVWdpiuVROiPz%2F9jVPFT8%2Biux16o3lLBNDJTjTsD%2FbbzoZtxJCoYXNvSuMq%2FxTGirmJRGbZCPojbAiLURkiVfy2UHdjFeIpRF2uNZu5b1Vk6M7bmdg2Kru35TW2Y8Yz20aizdBhlZvOt8DKhDyBwaAghMOD8bdEyrNmF5KegOd9jWWS8T%2B6rqWVnCPD5yY7NHy8kgwbcqEoeKVX9zFb3TI3xn%2F4xeFM%2BKz8vUpdj2wlz34sPuEA2Agi%2FiilJ4dtFvptXui8plGHNhapuJuhCQmiGgI1q49BVvy3a6CfI2bc5QpXPQfKOlIO6FIVfXb9EHHv6XlAbtKdCfnIy55uoiejyLuPa7rSykjPMJBKlrAPoU0AzNpB%2F1mCuoT1LsueAwWUfJ%2BcIe5sOnwspuIJhzd2wBQgxKkqlBNRjHwEyTdmXG5JSlAi62CVgXY9XS8Zj%2FEqEI0BiLtCkb6RMOKmzY4kMOW7o8AGOqUBvAkEQIkIqQy0w4aQtzxRysOr5DIo%2FkgbN2i%2B2toFt9SoqQNk1MiirdYr2l%2BozdPzM8vYo1Uvl%2B8DHClSMVD6E2YoBB4tOrzWIZTMH82%2FyfyLIOKF5Ozo9O0qWivkzv7CqpBA1gTv2hmHbq%2FPUwsXXtYiwtp2fjXML6ikbYG2CRBNiUIlOTaXRoaAaDYUIqcyG5KtDbymVBIbI8B6%2FqOU4Xcg5FgJ&X-Amz-Signature=da48fee07b22652c745b54a189c246c74c564173e199a48155b7ffb1525fbfca&X-Amz-SignedHeaders=host&x-id=GetObject)

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
