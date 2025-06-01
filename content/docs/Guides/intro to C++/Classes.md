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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RDTEQLK%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T230806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIGNYa2WqxV%2B%2F%2F4iZTuKKQIpbdxKOQ2FJmHEDmNexInc4AiEArTPD%2BHS5lzt00lP%2B5ImMDmzT%2FnW5ylO1e5Qj82JYqV8qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvG1QhvambBxQoGSyrcA5ewtqGa7IojJm0GgarRgKlkYb0dZNZtVcarJzMHjC4uny7eWjPH6bVnIvXC0f1i13FRNFdGZGIdNAiQ9sA73q4xtG%2FYF4qpxeWxdTsu8poaTyBMF%2FBiO7SJQt84rYSWYEruP8m9ofALoOWSphQvmC5f%2FfL6BocEBhzGKrRNFDFLCHyXowrujHcvxERjGL2ex0UDledvGfNQnSlROo0Im1ymhwRJIoQ7Za4%2Fs6Z510AjcUY8L05D5Bf7Xi1iXAU1aN5koRlXRcsCmXoWqiJFd9%2FavGKDAMp3Hl23d4uHrUkbedRHnVEH4YIf8TB1FArPyckyOZ6Eh2lzHDdNUS%2BASHZLDezlEg4ggrKxfpio6Kk2eFyiniJb2R%2BoZgX6QtqPh%2FXf3qq0WFxINWAb2ug6AqJ6Nm8XOKJ1tPrK8I4%2F6CBffU9P9M9zThPwopayEmyF%2Bw87Z9nrL2hrXdtnmrS%2FaEcU%2Bnqq1wzGZP7YAcBjZcap2GUWyv0eU9NfZgBnfQG7mT%2F9eFXoCJK76hteT2Kkh2dKsjibcFQ6QhWpMX%2FcJLH4czA4iI3sHELiwoPX02zxLzGFga%2F4J%2Fnzo7SOiTmIgKOkga2WiTUyWOoOln26g3b8x6dw%2BqPtI4TZ76%2FKMO%2Bm88EGOqUBmM%2BAUNyqkpBzRHyD3Jz4gsBMEqp3Egly7lEB1oZKPyFF5urR6h8mceTxTGRQ9eiz7JtpbKx3iobiVRjtNNKusiIoRqgsVpt0oHD7%2BPDBiDPOTjL2tV5YHjKhRKXDtY0ouopmQSgr3b9qaC3hCP9saUyv%2Byl9tSRdq1kj3EMxG7%2FQy12U2a2l5urPIqji227km0zI%2FORYw0uk%2FJ%2FwR5mn7QJXJFCR&X-Amz-Signature=702ef5c2b18684fe736ec935ae57809c38ffd1d82c8fec76958f5a285bcfc4e1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
