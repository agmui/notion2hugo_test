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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTHICGRW%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T170136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5OilgEioWJS3JbSKv6r%2BmR7FTaArUq3imBR8t9mGeCwIhAPwDlg13e3iDjsWME%2B6NHjI4DbyqtJmUaP%2FNybCaUDzIKv8DCDIQABoMNjM3NDIzMTgzODA1IgxOIgFPqMeO9WQHx3sq3ANhJNZdcHi5RkyRfCFF3w6AuUN4xdOanzxhbpyc1KjETMkgiqboM0e030Q5UJ63XW65aZFVuHmzE3kjqdDt2R%2BsbnRM4gEkgWPDNAQ4jGxl7Hy%2F%2BkeQgtql4Hob7LeQWEp%2FhLMt8A4gjs2nUZV9iBwxChA5D5LpEGG9%2F2AtidcoCbxHMJbxTrFVNtYFuJoC1Z6OxEcJuH0SSOXiMkewihOOqUFW7U6%2F0uWDtqQepzvoH9glKAOoA34t1E3Q4GiU%2FTpCbZaK4%2BuL805I9YmmAi8rfgX7XWMmfyTZ2CJ7oYuHrphkeSlCbqHCB%2BL7F5V4LM2JDblL7KBk1kO84AuVwYHr8w3sq8qwcQP02rHsw7KEFZd4wY34bENwrtspq7EPmb1e1w%2Bz8EQKLCn%2FLPEMIfu%2Foqli3tLOIYGJnf9rbpsb4HdU6pPvLgS8oLAYGaBFHJBBPdzy4Fe1ct99ofg8RVcNhXt%2BkwUflvqaf4U%2B%2Fw9CkwAmeVTNuRHOhBYV1gcr6rmawP%2B9oMLS6oN8eHMTB0e88VCBYOYqedUASZYFgB7Zu7QRo0W4FsgdfExTAm2jtqnPZqroBeQ8IK27ALm843xB%2BoGtoDYnm1SqArRRsHcdPt3JjBEBCuGfDF4kWzD7%2B%2FLEBjqkAeSjlf8OtnRlWpEPzi4%2BlEyfaatmu8r6dzyfzYId4VYRPJ5n3%2B0is9Ok2rlyVq%2BF%2FraWd%2FMMPOJOl4xzbCRRmjbn2FccW6vYzyh2oR8oNEDwao2afWlCe2MYarjZxc74P%2BsyU4hcNf%2FBu9dMsj9H2chG6V5TmW%2FYRnVGMAjx%2B9iTEzB5X%2Bw8U6AwhwRXI%2FnH0DDM7qqr0DoJzJs4CQQnhGD4hWHa&X-Amz-Signature=9e231858bed927f5df6a374eb024e943a30e1ab2557a7e47ea703cd40181cb0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
