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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOK7J42Q%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T033553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbu1GWF4sjp47YfIBPTjzQ6OSz5JK3UfaIfV9ecQkrWwIgNYrPw2j6v3sCrWn%2BDWTGayrvsT5smZgn5QUUdfY6shUqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNeetFeSlUiTfa3JYircA221T1bBoDcKGdyvBpc8srWdZhRgI2yI7aDQkJVRAakqpDc13h2Na70oeS6YU%2BjbOuS3ZM47of9KxRET4YlU8KG%2FGCXa8zNsK6o15yLrg%2BEltYwqKVT1Iqdb4osWxXZGqMXVcWXahGYGnUJYWqP7mzt5E2ZVsN1YWU%2FYzrQiCHvSFTAyEDcyiW4qBlrBM8xZTH49A9wrwOe6dRUERR2Bkw48hB0j4SwQGMCHA6Yyz2hENbLmp80xa512%2F3XxyXihRnWce60b0DLVSVZA6022km854Fn5vVVEEiOLAxNd2lNzmat5FHYm8MpnwJjd%2FUBYCJJBf6Fjsf%2F6kjgoJ09NwYyzhW50jXymzIuwRL7eTqR3B3GM1tTtS5A7htbMh4bzey8R83B90grxrfKPf%2FYIgkGydv9LIwiL4axmOqNM5uifndom8TYaz%2FQzDe5E5JbTNkUbtsCYrBI9pgIbnkN8GYPQkguGA73RIpS6e%2BogE6%2FYGX3rfxX8NcNlpKKcJdak4p0LRg8Q%2FXPBtroLDnyN%2B3zJTbquR7Api5z6iDMVmg3vSjYpHoln%2BhH%2FcyKEg2Ev4bQ9ruNbtwjMdQLVbHfgKaT4P%2FphM5ip9UyDFz6mro52Wr2hW0UX7LpkRM%2FOMM7jr8EGOqUBo8XP5G5tjmu%2B3ooHz%2Fsff0PsMYw5mCiqd%2FlSwmsG8mvMqF3l4Fmj5ojNUgcT1vwtExzkAVRPW1JRSGirZ%2Fzg%2BkUPGQNhc12gCrccd%2FlJcMjTcNS4DOkTlOOWRPERw8lU0P8er5GRb72pUfqNoU4YHO9EsxY3PLg4MnXr7sriLnJ6d48F14Peu3wkhDbOUPCJOKgTy31bGv3M%2Ba5Mv8ezSQHWtd1i&X-Amz-Signature=2990d160fb620f52dfc0d744e64efc3cd5232d3509672109910b45d224fd0eb5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
