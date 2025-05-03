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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R6YKAFC%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T070732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQCCHsWHEmtIC4dZIJ9OC6DSzj9R4CPzkYlPkIQjqWzeQwIgLRq3k%2B8r5HlabdLUcXuzbXW9T6E2u25AEnBgfr9yi8sqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPptfCatoIca%2Fd%2BF1ircA8OGqxiPVPKT%2FA6Cm18R2IzIQIz09sNGvwRZaXioogulJUpuo0x%2Fz60EG32P5DBTJxnPliH%2BbSR2TXSvyncuqLxThlIdaLtA%2BmxwerEkw6MuHgJOWzhn5EmJaUz9%2BEt7icR2gFkv7qMxcH6NaaGav8WCy1a9jgvYAJpPwQbDGB%2BLhTjEYcjS1Ji2%2Fa7LYdMQmPyL08GOYyQ1jIv6huFH1tC43i5tEtcLoBpm1or0tWtNeyOoSgtHdjiPqp6FJUAX3Elo%2Fl%2FLiL2IvkQq2zV4X0u1vZ%2Be50knZqu9VGbPbEK9l5fkX93prwe3bhUoN0Yr%2FX7U2RCArtZIey8J2apnPvN8A0yLhg9YNcqObOdg5HAUqV37tn1Cap4zGIIMh%2BPS0nfevxMCcm0JbCPJhlscMs8BZkR6WAUd0oYn3HjyrxxIOaz7i5EH08gE7EFhRQaaEXv4EHTWbt24MZvOb7b4gtgH1pVpTMU0Y%2BWHI728PXlxLYHOOPL1b2Q8qDBNJZVTCvTtHTQ4xgzGqKH16LaGsfQ3B%2BpLGGovgVbUDSG7uh8uyJTUpy%2FpLFxYIJPYJ7COnPjaxkoj9JyapgRJT9xWnmR1AFh5%2FIn80%2BDN2lLFZNH9lQQ0dtUpPCKxwTu%2FMIeH1sAGOqUBomG9DNO1ImPpixen2mpZzIYZLniOpmS%2BByMpw0RZjmmRK9XnZ2BKKiMmm2%2Bnbr08zvog5LnqqPJ9FGy4lx%2Fzlt02lNPudBVZV5JF%2BwaVxdIWePL5gkA7tduXaheLNs6HsxNwrti1rSB8ZsNv%2B1R8hDKHALjePK7fHZjlzZb%2FU6TARMri%2B%2FZWXz5ZtVGidItCDTpXvrQDeS9kA9QXaJSwtaGszdaQ&X-Amz-Signature=d721ede3989ba961491e64478e83205909a44c42a123a3b6a55b23babec53c86&X-Amz-SignedHeaders=host&x-id=GetObject)

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
