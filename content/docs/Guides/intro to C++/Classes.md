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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NPWNCMT%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T040938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFQCFc9wDt3dcUWL0nvKWaBbsr%2BdsxCEgjnW56Ev%2FLTsAiBFHGBvBhTG%2B4%2FiSPn7FStnjnifr9hyxX5QZA04paDH3Sr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMCZpObGUN76ua9%2B9MKtwD0XNsgoMYSxJx1pSWvYPAielDJ3XGxzlmeFLT0GMcE6mHx9%2BRwAX8Ng2OsYYSmOnnjWPqSC9ociuzl8eLrknVsbCtefafMd4IRVxm2pILKNN%2BmkFjLkqyPjc%2BD8wBeda4GvrnKAwAdzN85kpe%2FWb3ZBOg19KA5gqVk0NyqLH5HIQriV%2BnMheP6oa10gGnfKzmJTd5ZiHZY7Orn9Vc%2BLrhEEUyPMcbx598zRjkHbLi4Lw9pKBJr2KnUtOKMP75R4VeDFiK87vww2Xeg4uTQxzFqRXO5N8xkTQ79QoBtio08F9QBegnTd5g9eCIeuWtKoY%2B4Q%2Bmtu0l7aQvUSdfHwEWxYasR4kdOjiMa3C4mCyHQGWdJ57FjE8DbSgRIf8r7ztk8ePA8NvG71w1OQhxVEk%2Bssl2dxrZ%2FZJZBcIjDzc0MpBNDV0HBjN5EwV61ZcN%2BrmuyvVFOIlt7oaYbcqLltf1JYH%2BPzZLU4pEHgMe5mOx83Dfg3NHj4%2Fcm%2F3uNtcYXvx2GgFvnCvOUGOvEjA8z7gOgu5xHfIYKntD0MWVDv%2FympbBgTiYv2sqZf7D4cgOG%2FWr8bFfk5PdJpZ%2FIGdAAToB3tuB1un3mi4UkG8o9rSOY13gGwhxJebAmStf%2B9Yw2Oq6vQY6pgFhOrmzyZ9pFzAyx7B8mgYR9k6IKxBDypaiPgOq8e5DdaDV9OyDOOtFjTlfE4w4aXGr1KyD2Qfc5Y9dTC4shay7LAuh0Up%2FY4LFJ4lsrS%2BFUpijgQ17ZE%2BeZIUXEFci7ebyLIjYjKveSuxdvZa4qkeQs6YAQNydOiCDaKtfNVrHlIhVbCYKuo8fyoOzok5z2W1ziTUCnln2NJC%2BMAcZUUmSoxvh82Lq&X-Amz-Signature=ab2e34f600801b175584ca658aa5ba7330e9ca6d01cfc20d7cd79e0a57193a75&X-Amz-SignedHeaders=host&x-id=GetObject)

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
