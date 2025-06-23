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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KXCKQ75%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T161058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCIGrwZ6I8oRUvjEKpY5IESQ7iTUyq1zZpO3ARn05Cx44iAiBcufGdmTMIGKCWJ6djZ6u7%2FWuoU%2BjKSUjwVi9yVNHpNyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMSU03fU9MOIPoRAjKKtwDDDvm80L%2FVF0uXuna2e1MtpOqW%2FjHM%2F%2FXCG8D1dB4DxeJJh56BGr64tOA%2BwYEMKrZhR9VdIEfyaDm%2F%2BXSJ3wI2M3LSMeYz%2BXV1lZGMTv20%2Fa%2FXVUBovQnOcF6fp2OZF4evFFl00OXviCanuK5dYER1tRRWUN9wu4xqQCY6pw%2FqKXQsCISaupK7gT%2BRwnL4Pc%2BtRYM97FwuNa7qns9Mukq1Az737uo%2FPA%2FBRgwwiBTfCweYYZcMFaCiy%2BpqS%2FOwe0aEK00GZ1O7nfb8GDDdXptY%2Btcqylk8v9InVqPvV4PeTTKwG55reQQk8f678XPqkNChjnapkI1bp%2BHXIPKka%2B%2B6Yn%2FFHIXqEih%2B9Q81drjnfBnDmzLYAdGmNkskFXr5yF%2BpN4LZ1H7Iq59QoZVTcPRN1F1b1sUE0pgOuIXo%2FJ3rKQcx9uXLZPcOkWthB7pZ%2B9RWk4VkP6liW%2FbbArIxTqhCPJug1N3cGcKdjwyDe6UCBduG0BtDLqZPsTRyGkToAsNmOvwSHPKVjam69uW7KJCuuawAMsRVo1VHRMjatL0R6NlH2HG7cc5OAZa5qlL7nZtscQQmRkZW4UmmmWYBG4qT61hVMvxBRELIGGVrLQP4tNsQ%2FB9J6ug4nPBkl0w2%2F7kwgY6pgErS52SyLVTJjc%2FYbSaPOGgVc9ZibqTaNMBwCM1XxA7bXlc8s%2BeyyPXqV6TprGdnkyv4ZHpaxHcuLu%2Bg3W1nKa9ifRpAygbLXtxAhh6W2s2gk8uZzXpns%2BPGNJ%2B5M1Bqatiik67ev635cNapsZHl4vR%2Bu4LzcLqEWRZ1XQwhuAqVhokIyL2MnIQMnv%2BL%2Fnl%2BrlXDLmqWKK5jHzVg6YZ0Qqi98ovW8bP&X-Amz-Signature=f3aef10ca222761750d71fec36e58af30f5d0ce40a8fcfdf9318a17ddb596d4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
