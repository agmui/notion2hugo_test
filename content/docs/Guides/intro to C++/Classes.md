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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XSFRN7H%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQC1xeUEyNeaPlYkMTiZCL3unPZ8tzFOUs6wUbH3xHONbgIhANfWJoii62oM3sFImNku7%2FaadLACJGoeRoOKofBHC8jqKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzt%2B9c%2F1u%2F7U56%2BE%2Fkq3ANOf1Ad7PjKXCCimpx1XtnFJxyg3nwebj20QEZND%2BUMvD%2BCbkhkmqilO1kwMqEbn07ElW0bWzAZBy0rQgZO96fWRdbMTs9S2ynSZ%2F33qEo24W2wI%2FyTBRqGXR5vaNurC%2B1fNHhKH9Bs%2BqZuU%2FSm7h4%2FwOIR43XMp7O4Fr4vrfJqHvO%2BUxbT9kCNWi4vSs0xA4sBcRNzP%2Ff7zzPwnCVawxIVk%2Bc7oebkwI0WTQ18qYOUcTJNXggQzFnzc2%2BthdU51zp5wT3i6JGJswPx2pzn9XgrpERfrUrhfuAV%2B0tP0%2BT13ETg0tJfGvxDoxlBxKtMFLRFSivnLNSwaVmyo7L5oqvB7%2B4nERhL6XFhDcVgKmPmVLcvHVIkOTB7tIqQZdTVgkm9U07TQaZ277rMYsQnYmEzns5dn0ZRNnImkQzsPBa7SXfq7RlAnzCEjlFj7TdPrB56o6F3bewSSJADP4djylosjSVVjjkpnOhPeCclrG7kiXbZKvqDLZPelL0c36ey%2F%2B6mWdG8lBHMIaTXCh%2B7y6EYx3aUfE8lOwVWM7G4zcBw74yh39mqGAI%2FpQ4htvtDEh3Trk1yaO3CYyhP10Ij59dmQ6l1TqbY7rLKKQBxtaiql0RD0BWfep4T%2F5Ba4DD3r%2FC%2FBjqkAWcnGQ3Npwm2nz3yQBB7fcEGK80UDXZcpDWUUvWs48LMuTdQai8C73w4%2FiLAAwe12dhRloPvw7MIQ3VnZfOyssmJq2jeM4Li7R%2F25cTBiOe2f3Mu%2FfgJUFATBBht05AfuxNJy%2FXbdnLGtN6ooqURV7m3POlZO4h7Rz9Oj%2F5IuOsMw7GmQ9pR6gLB2ZP%2F6pqfx8XyUvfvBFb4SNzaBAKIFhbqKR9E&X-Amz-Signature=20484496328c4cfd6642bf6889dd839e78945571440cd76bd374f10275686c17&X-Amz-SignedHeaders=host&x-id=GetObject)

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
