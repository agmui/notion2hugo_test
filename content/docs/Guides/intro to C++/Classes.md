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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626HXEB2J%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T050759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqViiQ%2F%2BodegppwBf%2ByxVYZXYTdhNhDXgARb5dD2X2zwIgTIQt%2Br02Vu%2F9aXG3mpZeHaz6MztAdyk81jI6C3ZgWk8qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOOEedAnTrzwTmtoRircA2mkQIXPTXiFBaYDKPzlPtkjbq0GSOzjMu6p2lUW7y7fdRrxx1Dkyijpkd5jEkY072QQ3pZLwsSeL5TJOtXQEbPtqGJ4Ip5bJ1nqB75hVJorOj8XvXGWG5bDx8%2FgcVqrptnts04JS2eJWccQy0jR0VzpLCs2p9XX3%2Fgj5bkOMlbuLAS8%2BT3RJ9mLiQPd37y93Nyc8ZfsoPoF7tz7o4rz0JZyXvg%2BPzduqnX0bTF9ihige%2FtWmoDXklhjfFGrp1l%2BrcRU%2FiE47EdNx5qKb0HhupvcwxQEXArEjqOF7V%2FuChmCK%2F%2FQecIIngq847b5tVviE%2FCtsIlCDq43aEcULXUmXYBM3xsJ2iZZQ%2FnpZzmHKW%2F%2Bo7B%2B%2FcJIbJQHsnTs2s3CSV5vImv%2Fq0PiiOziq1cVWXkLI2oSIz76ozU2dggIPc6e10O87umBEjV9W6FgzY659rKUBfLAKb4OYPsJ7q%2FerXRgvPk0iL7HqEPMSlbNejGjU4kQA9epUPQ3eCk1gMSNdNXxUOo2lZ7Uf77tC0FlMqbtw4YFpDXFF4fwoyNvgyNyrTODVpzC%2B1QZF6KSJ99eBEARwV%2BkSIVe0gqmRL6Wakx6pOd%2BoInOOhvdZx6%2BAWxxjLDd51F1frWVgW0SMOusq70GOqUBj8i3y26Sxx60OpPiip9tcFtV%2FQnra46H8cxJlx2081uQ1r9Lk4zGgkQ4qRTefMUqpEtSe5C9vEbJuKXjPtpnnJSTiFZxDZs3fDIq5oL2Z2wjWYL7IMARFMhsRabE3JttVUZcYDYqg14Ye3sWjBPVHEZ9VzvrYOsNyquMy55RInjOzvxJzLTiwCNu3SMzquUafqKPB7RQGWdClyzmQLrGOER7OQOP&X-Amz-Signature=7d77dc0a74d009e47deb7e37349491450c3f596f2bbb843c6d83aba6813ca737&X-Amz-SignedHeaders=host&x-id=GetObject)

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
