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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667USIX62B%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCU8FT07oZd7CP%2FafRdDiBQY6hMQNs7qWnH9J2iQRVKNwIhAMVwZ0wSRwRzDk%2FxjALX8cVLCPKsi4R%2F1YzRIEXefzzYKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlHpoeXgdTKT3w1IEq3AOz4ZB6rZSlH%2BnIoFUtNW3Z9linWjO%2FruhWNhPW9xjJYVkVJZY533GR8%2FRvdke2iDvnNA%2F7hPSD72SQCWZVvjdEBKeIaxSdWw2c1B5GOzXTKtcLhLPKNKbwtkNFjMYuhxHmcEhXsx12PhSW3Z3ZxKf3Wo5Ob0byYaVfopfwkJqoUHLyG34BV22VoB9%2B3s%2BA%2BmdTCr98Q3uMQRIxwCThGAM%2ByPf%2BezEltuBqxDlPepU51FQEHKlAQ%2BL00x7omHsPuHimG9004scfg%2FxiVQeYONhZNIBNnQ%2FfRD3eqhmaTD5DjCunFvyueKLw%2FrHRMwsGrfbb8mWQ5PfcxxuxEfCfLJy5HtKpmBEWgnjKCQqDtRJK7XhgmpLV4MpHcFFynFsPeDWbw8SH36CIaugQecO4SoGdGJ1OXQiblCofdFXjLedXUZ3%2F4vDog4UTK52wbw59hVkhnJYklNgBrnK0NeixObZad%2B2DeRUb21rT3cTxO3vaG8HBrlIsLbxHN37BUn9DU1abu9dfBKDg2%2FmsAQMc2SVH%2BqtkoAc7qB%2BTn4vYIgMmT3pM1EGXnr5%2F%2F5RMMWGtBLs%2Fny%2BTSv75%2BQ7J%2BuBB9Sp9biqpe4pG60zlHEiY0QdZUch9%2FtovT7B1wOnXzzDYisvLBjqkAbt8ATEioj1Z6ox8xYlkLiB3yWgbmv30JTd9yDee8D%2FOZAdLzjrAGB3L59dduj09Bpj%2Fsr0LN%2FOBv2IfobbTbh7WEseZzJRzx9%2BHWplwvIC0Flms5%2Bxzk87VsumRMqohncytsJVCT74wBxK4QlEJR%2BpEUHdw8piTqJukESc8tJGiSG4RwG42OtjNqQl8YtphKf93tj6ykQYzbw6U5i5hgi0mwHY5&X-Amz-Signature=ac0705c6b2faa5a6cb65b851603c5146abcec2ad45d6d4fa0709ff18e900fd0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
