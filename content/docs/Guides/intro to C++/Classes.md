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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSICSZTR%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T050855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIBOegzk0f7UWG%2BznFRESRR5E197j%2F0q3AtTMfvR2wU12AiB0qcHVENrAq2m6Pd%2B%2F5QtBIO3%2FcU3j71%2BYrHZMnZBLPCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIL11lbC%2FOlsiEfo%2BKtwDa17bNUjRvVHD1noFvRuH0AzOBoj8c%2B5xJMOKb%2BSl5imUUxRifLBYun26q9zxOKBceoC9sGX2GluVT7VRwyGSDvyHQrDsZD82KBCM%2BL23tW7IRuiqcKbpoUOFgUDsc2IbYh1BQU%2FX%2Bm3j8sx%2B0fUqbLlLjWkjAsrXjnUfvI6yksia4BWHQRC0cL3zp8QtYLd6MXfAP9KR24%2FE51mZlvH%2Fys7OUitx%2BRycnfrM7Gp4FRHOg948B5qjF88C5HnZ3M%2BExvFD0j4JhaVvWQb8tMapAnG9V4Ks6iPf6Mt5fMuexZB9ZdGUu0Zd%2B7aFmJnmkxqp6c5omNUnjd4%2BrmDjMfahoqdOfRh7sok6Ts1pYhJLmjWuqZlahEDz5hxSVkib%2B9Xw1wPaEd5YSG7r8tQh7MR%2BltcRz%2BkgaE4EJtshMjKa%2FHow9Yw7CKDHoD4XXaNLgtKx0hWD3HtkoH3LC5liryDfXKWNsZJgcw0SEO7GluQsN%2BsCUqD3JhxDLZ7X5bXU2XpFgDlubsd3WYhaRADKq5vPhCXgIgbA05aFJarSBLW1aQRafAjZyc42rEWtVqJDzwZOKBqV%2BOJztMGCQhAgYe%2BslD5iD7AdBEEaokARrf0w9NZKBKnUTLuTI0RUPxcwgY%2FdvwY6pgF3ieoTj%2FNtLWtpUqdrdV0vkFlUTf27mssJ3HRrBTF09kOpGySO5rWbZGptG25x7ttgxwncRlRvRjF3gXSTykB0Mb0UhBaAilqC46phYfF5jiLIDUPpODfw9Yyh%2BeUbsYttxEJlj68mkXKN38in9s%2Bpzw4fLew6JF0K5SO5JLTGJa50Yn8NN0S04FKIcOgl3iWumsdonjRAbgm4b6vCokMyqbZ5HLhi&X-Amz-Signature=ddd43ec86ee68d07c3e7a7c6e00003f6f8b8725d16e3c9639e92d7090d154ba2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
