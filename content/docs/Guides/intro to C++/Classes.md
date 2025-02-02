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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZML4GANI%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T060935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDAkKF3PtHi5k8hKqObl9%2B3e8Rmn2YFW3K7iCTyKysrQwIhANVS8rNeN8X4bbxSuZ%2FdXrMFwFEuJRsdMjw%2FU3FcM6tlKogECOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPh2RCnCL80zOlj24q3AOtGiQlczFQ7C%2Fyw0LDKEdxKHx3Wjy13tJScGLMIs3Gabpj0OH55j515nT3tNXts0OguS4xxQ8rsmwZKksOQh4BKWHJ26V5OBq7YDSZpFTEUR0OnpDskP4GVi8IVTM%2FZURu8Oz41mSa0%2B3mAxJO5M22bx9UxHLaYwI09wD9yfppN9p5lIIm%2BJtoknkOzJVGn8havz1m94NVFWnl6w%2FwJmOs%2FahBfzo%2FAgwxC2PuGonxbogY0D9pXb41LcXvU0lFi7TpG798R14AehQ%2BJXMbda6xPuP2qU6pOzIjB7lN5q15F%2FITOQX0I4FMY7h7JgSfIQ7Cy8lwU9lGA28dFA%2B%2BJqoKnY1RFTgKam8mQLhNfertlU9tCclCTqP0KqpeeyrirjnYyFNMp36iTNHnola4hwSwjmvAj8QThVVNZEA3jNHNYr%2F9VfmgMDSlqx3dnHWZ%2BzJgkvanIdn%2BsNF%2F%2Bpx6m9ZtJXg34Gt4nFvuEbDpDTcSo7QB98TrN6ILjt08uL7jbIMmKCIBBrm03sxPSddz1PwvDPOuJgAkJ9NEEAfQFG0NzxD9YBXjL%2FdJpnlu7LK7%2FlLsVcRGcjJjrrehkFo%2FTOfhoG2yyUKUkiTTTh9vixXxz6yKszU7Nq2GnYd%2BzTD04vu8BjqkAWVmTcXfpd4ZT7KlvD%2BjS9UuwT%2BI7asVF2Qt2XRSKg3jYmoSMH%2FCF3kBtqKPe7CLHu%2FqmyW2sWQu9m7uz%2FtbZN6wEox6OlEuyoX1mfRxpjfscSapoGhim1vHvzHHrNXFtFfn4NV1kn08UeiuTqIZ0fBXVUw%2B95KE10YDuRXm7yxfjPl%2FzRIuwxFl2ZvvJ0AMhsJbWDTB4PqaBpPpLgKgrjN2XLwB&X-Amz-Signature=99a68c4125cbdaa6de798617dbc06dd65f4088c04527b17736f9726ea365e9f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
