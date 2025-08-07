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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IRRAZZC%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T101029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQDB9UvMuQk2Ob4ykHoxqacRxaAsGFfq6E9IbRUvyYgWcgIhAJGWglZHv4dLtfuneWAKYhoe7rHrx78WMnnMK0xVHyroKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyNpJVaM%2BUckXTkbwq3ANCEH%2FlgDZFkW%2FCjo7ho2XPXcXl5Mkvx027tlW7UtH4WytkRmy7JtlGwD36I8u2l%2FfLhgBjtge62BOPPWv5vx1nbyUf3xpG3f1QeYkSLRpPrvKsP1VUs%2BE6RMeV7P9H01GyZVgd6Dy6Tg48wwAaa%2F4d8MQbYzb3c8nc0DLmKw47ec3ddiIoljKRmcvVftYhHjSyA3D6%2Bxb%2BgWIGGqOxXZ%2BAViPC28R12pWGu1LY65YfaejU5eHHAl3QrTWnBmlEC8OB04SdK0YdQhT8HjmeDxEdmQFhZ2OECChUGM%2FZ8UhlfIDY2Mk94Ni9%2FSScsBqz1pIfwRcXGkaVOKWH%2FUHMGJMhBfrpUiOrSuVjxLeYsiYjSTKaVX3OANUWO%2BGAIw6shDyK294YLh4wj%2FsiVvgZcqZeBbDBTh6YknZt3%2FRdwP8eJTZZjanjK6goPGXVJyNtfdXp4zMiTUqkGUl6MKcnnPIBtEzQN1pgErqvfXnf1YnGIb1%2FCLLjE%2FaYLwZX9FkHe31T%2FmHHj8Rn2SMi1%2FcKwvPvetALne5KB1sp%2F3BMDbT2w7%2B40dNwcGHCd6CM8Skl9MAiCM3BCOQHEuFv5RuDCWm9svbUYEbc%2BOAvYogvUoDJrfSKQiAq7D%2FAXEB7sTD249HEBjqkAYwM86zuZ2fv87GxZk0jMgL0G2JK0QCHj9kbX%2Bb67ue8jiYXTYUCg3pDYQd6%2Fn4EXl83TopqPXK6SXqEwWh7vzHJO%2BBH%2FfrpxFVCtbS2JWS6lzofnsm5BdeHkZxNP9tZjJb0Vat%2FwKyfEOXJB92kQbQuyScnw75DRr6QCMi51Maq9OD3v1fbnCeHGmdVvyZZ78a7fD7VqqYA%2FUXI1lwrzk%2Fri9s2&X-Amz-Signature=64e600330cd5b8c7a9c599c2f2cf9f997f83bcc8f1a92c54e0dd6927821a1d77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
