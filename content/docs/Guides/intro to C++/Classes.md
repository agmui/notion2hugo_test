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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFKHYN7O%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T021542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqVmh2vBKerUloADJ7RnnYADZKm9e7zujZkkJ0Sk%2FreAiEAzC0zPoIeENrt%2F5d6kQyULn1rruIhUTmov95hrTpc7Fkq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLMKiRbvlinzfTSVpCrcA3ghlHtIoycD9%2BCB9v8sQITYfHHcXVej4%2BGJa%2F8mMLoeaOSH79rbXVBwqwPBkMR2NlScfE1T5l5T5iSU569i21bd1Uvap5d3b5ox7pVd7AwS%2FVf26aT%2FjYqwOHBOf545JNhFjBhdJlNrKS9sb8ZS9lkLD3rMYv5DT8I%2BmiYps5dY22cpgiK9aQWHWwyMo6PMEXuTTupvhshv5i1KiJptNmBCkdt8qk3z3n%2BhZtnnAbkh4hK2yAs5j%2FIqDgIcZWs3Y8oqR%2FPc%2FOE0uc04QytFrN2f8I98d%2Ff6%2Fe2rdXSc4sUU2USCJ%2FA8t1PrlKlb86uE67MlPzH9uB82Sfyl8Rr2mtf8on2j9OzWImn8NwOhO6yZXqjJgwAlxS9dduSpOYzZcl34qGP6hTHMIRyKxfolkmmb37r0tEylsyyUeNP6e7kvXWzuwWzchRGnmhpaEHPeS6J%2FgIhKYiE24wbl41juexMRTaiTcApcO56m6%2BzXQFq8ZtooIQ48Z0D%2BQ7AOL2fXw5vVXrvcmPfKhKbjHEReP96uJDH9A5vRt%2FYOA6RwS411rofhUQYt8opB1P0cMgqoOUry1bkYqGXj4phtPId8ZlD5kfOiwK9APbCNrwHGXQccDPJGbrGwPFF39JKNMPPJqL4GOqUB0hri%2FWNATyyoA6lNnqBnA0iNZ0ZvoL2kA0zOTe4u7l1UXg9GY0BnnoTFUjBxnGTaNEqQYmmFQn7u%2F6Xz7TJL6Z6NgGcIj3CLyDgc2X%2FMqsbrxoy74hhY64zCtHMbBJmksVQ7GWhEDAb9pGFPoepzF1RDR%2BRG7AYcAf9Wka3w%2Bc7mkQE0ipgyObZqfF7R%2F5Ey%2BdoXnAtcxb6K3Bz4zdDOh4c8xk3f&X-Amz-Signature=2ddf173f67b70fd23af3f3ea94e086df00c8a4a5cc3672be1679e0b211c005a7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
