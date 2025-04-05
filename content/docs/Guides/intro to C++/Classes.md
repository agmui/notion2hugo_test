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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FTYGT2R%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T170158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXB%2B9TdkOBR%2BdjQUEF0deFr7AQK2vgluT0Q3n3H%2Ff33wIgPfO6239p%2B3wTIHLis2HlBFof3FkHbnIhJsGSZeSrFzMq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDF00WhKRaI77s2BiPyrcA%2BpOJhh5antQVgSf17Q4DXqC7voaN%2B949prqwfdSZ1WTa1qHPKW5tJrvywXrF59IZYrpcUgDs4%2BcE5%2B8SfH7xxhosu6xhT8Bb6RzMsuFZ9ORMvpIzbbswa36XjzrkGQxoJZYdae0tIpi7DKA0PBGiNu%2FAHTI%2BVCYS%2BSOC2kbh3BMdlm2R8BUOhuDqiHYXo6wawV9LFJOXazF8kp1IDMo6mUt%2F0pa4vpfus%2FLlkGVc3296SprW%2FbFbv5u3Sdv9F1vjkZAe9kFsKVCyObE%2BH6IMhkidYwdJq9G7TpoyGDGiJ%2FfwUimh7rqxcTFEVpXwPlf3IrSHMnkyvesvGyifANuzZ2%2BEqIXHsILhq4IET%2BndTFdlrwWinj498ipMQ8iiEcI4Lbdrkz351HuRnS%2Ftme0OgstK2HUzW1mvoryfZEQ3JEJkEaIAuLSZ6LJDvvKddEeImnYnZDdS1zzLUG9aEZmAUu7fygXFOdM7DSsBT%2F0kh5G4rkQr8hEjlEoVraNlqEeMNEXKETIOWFpNNFjt%2Fvhvk8iMrq%2BvOuDhcQZsI021sLjRcmOuwvDj%2FUTinv0xf%2B69Pz5jqW7pYRWa7GJ6x0nQi57m3Yq4pviW%2FTDc5HwVJ8HnhPCFlA42H%2BlCdoMMPujxb8GOqUBXT29uiJMiCWZNYWoKhnFHrNgsVMok2XOe3chdV4MiaqnvagXKO%2BtZW5yFi5VmrtgB5dtUpAVWc6TnlwL869soA5AcXlexlYJGwhseZ0XkOT%2F9Rl%2Ffw0tmiNjmBkjCl6Vasluebt%2By6Pqf6cAKq1swyMMNUXznFsTLXdP0jI8SWLscgh6BFkcUrAI%2B5SZM5c1f05HJ10eOB62siaHlcY%2FnzdNf%2FM7&X-Amz-Signature=a5337dab2ac58fee0ef83fe5943432c2054e915c4c098748461cf2464c63b4bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
