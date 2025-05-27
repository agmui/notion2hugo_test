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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEYTGEFO%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWWB0lnoHLZgpZTOLXfCIL0KAnIYX8KnEAxiC6FWbkBAIhAJ246RHfv5sa%2BkEd25Stqxh%2FwXXH3grhHGT%2FDfQgWsXNKv8DCFkQABoMNjM3NDIzMTgzODA1IgzIFr%2FoUVexqqSSe0Uq3AOYqla0QSmBg%2Fzb2JKpD3rs1dQnNDokeNQRuZJGDBbCAZovDRn1%2FmR65HvhgnBTCCF4SRzYTnvZ%2FuKlD2hwwLK%2FENxfq1vxaS%2FFuwOQrISW1GwM69gjwFgKMThAkuhR5jrIdZWUzbZ2fd0RKQuZ51RlLZGnWkpeTLM0oQl4XOny8YT9w2FJRKE5eWEwRZTZ05o4GdhEf1PjJjVQWTHWxunH9z7cuPjZ63U6U1QdrpAMRhPrsaHOxS%2F02I8jj2vMDROV4tPyNKWMsAzyT%2BhF2L58gJTO6hCLj%2BxSp5SDl7hMnY6kUJohVXJq3yXz0VMt0suvxjyqgg2FzG5QmEPBirJoP0xsKpJYtCMncPLA5%2BDTuudRVPsd3Y6q%2FOSGGoNFhQWz4NRA9Nz0h0HnTmvnoR03a1VIbkzNBIhml2PTSISI26XaRNZ2BMokvt53tIXsw8roPvNE51jyS2Tdc%2FlHsDHZahDF2G%2FNjMBmPRcbKRbbJMon77ess6cVivnQlN9uwVh4IaNVwS%2B8EbG%2B1EQJOKguccd8S8pLOjhYQqqE%2Fs%2Fn8KfeQHthmctNgGAoKRk%2FSZFIvJZKuLSxumN0C%2FbiPpVAhSv4s74ldszLd3eVZmpw%2BgnqV6jwi7oMALFc0zDw2tXBBjqkAZMIo%2FEkryaw488kXBfQ2aJ%2FU6u%2FkDl6WmFg8Mx47VDYCdhCqJQ6FMOvOU%2BFF53y7Nny7qQdbnJRO1tBPDF%2BQ6Ai%2B7U4TRM6hlS7j2%2Bc9y%2FKcOAZ%2BoLDE90hXxtk41x4Wy3yuczFg0HPstto5fPIlV%2FVdMQN37esX4Y%2F8bCN%2FWzLYEHgvaaDMInrFZcyb4ojaBCOZn7E5Lo6ohIU0jDnaiQfKWqF&X-Amz-Signature=4347e76f35dea0bf6576c8385a993c82ea3c8eb9c472fbcc77a9b035778967e2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
