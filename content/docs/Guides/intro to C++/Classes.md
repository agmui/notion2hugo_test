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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6WVDCKV%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T081915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDlHJzTdj1XJk0XOEuglvk7hA2cR6tV7YlFcByC%2BI1HnwIgYYH%2FLxCUB7g8JUrDscQNPesp3sY%2FrVPGiMKBEvGavO8q%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDIog7p4xZ9rBx4Xa7yrcA1cJSb5eVJXCtTyiCE9UTNfdvUW81dCnhxZ1n25SX9Ei%2BFucRrPT5nfNMjG1duyamBBYHBQjG47TexPONZj3h0vk0F808KQ95z6gBi6K0utWlH3FcUPhk0ywIfsPvTuNWkHBC7EHVmsp2kS%2BsDJXbNUDBloNfvq%2BDrsaMWpTAW%2BmXhRv%2Fl9rprJzqAUOpsQTHDmmqUoL9ogP3aVSyBLQ0U%2Bfy9rsdzgRhIt5mT60CBGHlerSSmQ1cvyJAxQ9oAcF4hW7qIjaCC5FgtkJiZ1ebpKOpPLZYBp2PPo4vYWdR44mL0D%2FXvvcAAFtAJlB9QCy%2BEAxZnbAA%2BsWycUnS11LMR%2FKOeXFtCk1TWPpXhtSOnDD%2FtdjX%2BRiReF%2BfoUiTWRZJ5lZn6dTfsQee%2BAJRKbhIL1H84zq9ujEzHJu909E5snbV9hmChgRFVeew0bBkh5YL%2BABviwtr1mAwQlMsryquqTBylH3NMFYYTF8wO1Ap2JxhIutFXoqJlpK%2Bzb842dCW0vENbGnantJ40%2FKKZw9672QXsPoncXiKHbwx59ijkvCl%2BmuIaoHHFRXtpeJjqz%2BZGJvghmM91k1iDmPo4dLn7dW7zrQtLP1wnFNmR8FSfFqDUB%2FNKo7aOeVF0JzMPuO0MEGOqUB6LG5emBkOszApx5ac9QilODdJ3JU%2Bv2%2FT%2F8S71uHekvB4jZ4Jty1ESyZeMcau3TEGs%2BoD5vwkTEwidVs2MWhT%2Faur1SmbyBRDdmdW4k8XfpFrZkAkpmLW8T%2FWsNY6Nx9dc3zmNTebwwrDjXVPeam928UYqbxC4pWD2MaDs4rM25zrXqf%2BLsQyEGFB39G44jqiXPxdgURCiJNQnp5NWc8%2BjlmBuIS&X-Amz-Signature=3493667cdc3d09de2d6361c0d1b8f2c32411b883dd93c1cd8d508e4761936ec5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
