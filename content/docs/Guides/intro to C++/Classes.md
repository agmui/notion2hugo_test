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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HCMMOBQ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T034327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQC6mJFciSBWcfjDpwn0BYMj5e1otRKoqpTOPYxTZ8TwzQIhAItmTCrPd%2BW3Dlohe1NAOYZPGXd%2BwgCqs0vG9oCe8W2PKv8DCDwQABoMNjM3NDIzMTgzODA1IgywcLx8DuXuhZbs7RYq3AOptmVuf3rUiO4EqT9n5dyrkt47g182VERoXX1i2m7AiK5DH7zoJmhzYe3CYqQXWhQHzJZlMILPakgTfL%2BIdeEERfY1c6zoWmbf9XCJiqdksbUqCwyvZ3koFw4n6sEJZBfTORc3lfRCajmG00dykiiqi%2F8HWbhO25mXIPU4COiMPVshxKukDJclilV5VLJ%2BScHeAWHh52neWxdp%2BkFGsTd9YtPgslgPYb8PG%2BM5nVy3W1ZP%2BHMvggZH4d1s0OQSvJttx%2BSg%2Bc%2BRxj75TFt%2Fhkwrxqd3pp%2Bk1RmjqBDjvlppCwQgdj3jFerDPHexoYAQig7lSVUhKDA1O%2B8ZTtkRSYP0trxOMRMly13M6EV%2BU9CUt6ZDexaYQscXvxFiPbrAGjLgWQe%2FddP11vdSNmrsIUjsgEDliAxGFq3XmuR75OgjQzVb0ZuIrtwqCL%2BkOHAm3i7zQZvdt8J8N4ed7nBWDEYcPfRrlODXk4GKF9NgtHdC9GdTbOHJrpvrywM%2Bh57ETiudzU%2BaPcePQrujXKB3PbTEXYpxguOZqi6nwjqF0UbcbAwy%2BnE3moN3sf3ACUMfEiHeIWD8U4Vndocv4hSfIsIEFnCt8GO785CcX9tEY%2FqVuIGQC1R1VF84PUUrATCbw%2B3CBjqkAao%2FMfwDVof0xYBcZmxTYLwf6P529kJu33sOd3cGiuo7WUWudXvKF7oTE989D4yAzJeicjMcChb95v9Eh6To35tUtz6m%2F1yqhaPehC0AI1CmWY3f7bgGKWywscG2VecYQr7zEd0NP29zLrRkCyRCsC3wqniN8Afwu9VyI9XpVF5iACUpfeey5sbs025SzHYlgWx3e6JW97NrI8cZ0u2VoTJSZNTv&X-Amz-Signature=88fbccff3bbedbd7bbdc9c1942560a79091e2f46637b5a5fbf4c211c127b56de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
