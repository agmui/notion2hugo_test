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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM7457IP%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T033537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIB2Pd9kA0gt5dwnl19dnRw48yuYfXId12ajH%2BtOqSRhOAiA8JPwlwCKqtmku9OEQvrnLGqDRkgBiU5dHEZ2STIQqryqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcYC2HQB5kH%2FdFla4KtwDY9WYvQZz3ts7OYoxre3BpcEwUkB64MTYXuxAGC%2FXijYhiBndb5gAgA6PR2xGox2i9347kIkDqlwIeKO5aE%2B4g%2By7wRNqtmFFjNPjltYcilSAPf1RAkrqNr2Vi9E4m0Ho3JQa5gBXM1Zjn8DD9S7Hz27m%2BsDyduZQkqRGVWesciTHEuyeTFHg6JvuBTsIQVCY9FGoe191mD7yo%2F2TTvPaXJgQjNfvQVfN%2FKvDxOCZ0wlwC%2BPl%2F%2FjDW%2BWXB%2Bb0IxUEzWytPQgkOngkLhY8ZRfn%2BtHqUcnyA7dOdKm7TZcXnOzFADcle9WQx%2FvvOfpTATZUcW0fmPNo%2BnVAx%2BMDsdw0NVArgrZM14HGFySi6y%2FB8tTbEmtlNpkDbGgecQQ1QXgjNCq8FOD7AP9mWiBXHVZAzK5ycU7rx%2FAorOQ8g3m6LZ2QFJuSbDMPIAy7WpHpymfo5%2FyG%2F98xOGwHCeBX6kM3XBJMVtYzb5D1FaS4okqv0fCUS9exiCIi1F6G161wWH0cP9BfQQCXJo75iCDEKJKQgRezHpdbqoOP8nYD3TvraDtLGUM3QvwjSa80pGW8IANfQxILHWy5qlnQhx%2F0kQMJODQkKWRjN1CI5YWGvqZtKoF4w7WI7KwL1alismwwppO6wQY6pgFFlFkec0l%2BRymRpWBWWwycc9LOqdeaooEQkksjkjyF37pjExkPokyKaFtkEBTpJ5eKOubbpZbcFYAuevfhBdqj3HX%2B9Yf16ilojB%2BI6zJkrUOD0LI4xrCSTeYA%2Bef7qMiq0cgOn%2FHmRKOtZ1OGx46EH8D9KWbNUJZSyUreazq%2FSzM4eFGpjIpXFNStQySZkjTAI2sH5EzLjMTXkdG4Q6zIpx%2BUE3xJ&X-Amz-Signature=8963bf5b01242e3c1fc6e50cba2ff9455f1cc84dbeefc291989bc91611083692&X-Amz-SignedHeaders=host&x-id=GetObject)

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
