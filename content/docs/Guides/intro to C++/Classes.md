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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NUVTISA%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T170123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGQAuNzM40nkALDjYoq4KAhU8%2BjCTm2h%2F%2BFjADViK%2BeAiEAwu79o%2BVzUnurY0N4EzK%2FHb3rGg2ZNEtk4GwMOnJCPUwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHfu2nzh6E5H0W8n%2FCrcAwMr8EDeH%2F1%2FMPSbhuybbwM9xp6PjE4KrhIYXSDpfCJgLeA9m7d1Y0X5VyVug48xq30xLDwzXtU000q6scLQ4C11LyXQY1iDP6v12F6JHQdjxCnM3gwsFXNbwrIjN%2FagXDDSpGK%2F83ybPJ9wEc%2BVLiHL%2BeATNox3b%2FvQJh63J6oc46UwcNm4pUne%2FALm9ujen3cP7wuEYusYr4tHXoJyfKjpPJzKJumJNV8hwHy%2FH6fAKBtoOa0%2B%2Bfv3w6fQQkrDCNXymVMY5yp%2BTFYxeAmNfqMsF%2FxK1%2B36gZ7NHpf9NtukQ7HhfIG3hMQ5TtnrN33%2BmGVVSUg46uKlZ2QczPY3DU6g%2F71PqBrO%2BefCK3cGQ09Xa4RfNkQj67Wr0FnCdDclBV5IuV7ml4h30a8LoWDribS6alTnjH8d%2FbiusmIIbDgqdXHiQu5JuIGgSSS8qzJjIWTx33SEV%2B9IPm6Ebo0fOCa4Ch%2BvAY60%2BvsBut8nDFo1cznqGhVDj%2BPBoEwDurSwMkiyGZ%2FM5hdGc8J0%2BRAkZqggyOg4uHRA5XwpS9TUOUWPrrY86jN7DHQIhe3n8p5wptgcsSngce1WitiZgig1JgXGAxcklCl3hBXcO1NLK23RJG%2BM2VtxRJ69CPo8MPP4kL4GOqUBfUGE%2FnMddv%2B5rcke96s6297N4EbRNfphEZ1PcIVgYu18By6ge%2BDiBG%2B5K1SsPisTgVYVvK13VnzO3wPTy90pLDUcHJUrkOyOH1cLzx2By3voyUlmr8RosHHdO9nbjWe6irH9BPFaU9PkhfNURF0hNO3PisGLy4atN7FaH6oongRCvvDxCQZLNqBOCLsHswkeXBqU2YUzZKbze2nQR4P6ALYvn%2FIT&X-Amz-Signature=3185ed2f0230964669196900716748a4a9c6ab3d55930771b17e4fe362199c52&X-Amz-SignedHeaders=host&x-id=GetObject)

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
