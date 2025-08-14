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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZA2RXHE5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T181243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCICvtoG3sbZFKYHVimDoMYcQC9sJRiCWltdXvRkJ4Q8h5AiBLsu3qfP7CIvlzLgutvYBqUrVgJjEe3ZsJzYU1enxz6ir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM%2BojWxUWiyTf1Cr83KtwDPD1gbCMV0g8lbLsbv6TGN7RDlZ53cG6XKmjUNg10cSJISfmXqUX0spvoMg5VqfmVklu4pOqNBER68tIoTBFur8CO84DQz%2Bx1uL%2Fv77uOhCMkVq9zRWLkv0cCV170omAySTxwHwz7h5jIIMxzpj4oEmWDGRxq9tbbIRrzWFzcVAfXCCyznw30ylKiIgJffFfOjRjjrnJJSzi3AgER%2Flt6pm30Pv0NUWjHeLJ06S%2BLk35PuV%2FVNsa5oqZ7hYyahD54EVDMIngBtmFqPH1VjtuQh92YfRhMaIUTAAwWSyl5CTWrdQwCEAvR2So0HpGajR3WNGQaBH7pYllySR9wwrCEsbo%2BPr6iFFFNCirzTcTRBwfBzPxbdQvfye5VkgbRvF1adF774Ff3w3EBswEfQKW9DIfNyzuswzefJtCG2iCq1Qykjl89RSRXS0H2HbAUJztO6AngBcG6%2BtP0QK7lDceYgrsgHVtF9kpj2lXnHDkYZpvbUkGw9rhcdtQQgFLMsJv%2FkH0y4z%2BsE59c28%2F9hbdzC3QzJ6S3sRaA%2FNhle%2FDQy3Dmqy19MSc1G5bZVYfwv2%2BLAQ%2FmdYz%2Bung1Uc8CD1N%2FGoIi3p4fJjiwkXWtO9a6QFzN4qAbq89BWjH0s9Awm8L4xAY6pgE%2FKu%2BDTSilvMocpt%2B4iLhnZDq74xZoCBaIi7j%2F32yMGzODkhZaFYzp9%2BnPNq27xgezKZ05WIDZqFp7c1dLwKazlINZcITe9vNsXN6tDqAWJEA3yNEAP3rhx2OMUEFTuw1S%2BdTsoson4o9brQ8ySJi585XzMsFy6zzk%2B10ojfeSk3BhQHG0BJ1qoWL%2FTuIJL8Z304%2BC7nSYRVgtGxyHWZlUDqkdl%2FKV&X-Amz-Signature=e13d0172eef1cd475f5dd51495a05cd2e5a5b4ffab7e3ae07a6bed08bf5f27a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
