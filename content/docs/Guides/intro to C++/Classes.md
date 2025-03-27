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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUA7UXX3%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T061131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZAKtRP1rLyC1gCi9M01IcHlpkZLdKkm90m2Oe4Kd5fAiBzp2g%2Fw2v0GMHWvMRjoLntJPr7p%2Fvyb%2FoVpoLKLawZxSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMda5gmN4qoB2G00WiKtwDYzrooIC28a%2FA1lcHTnYjPWlgBgygYExX1xAulIj9rB1uVfBtYL9ykThnJaOkd5WNw%2FK7YmALqCp6UW%2BAjFI97cu0rph8E%2FmEb%2FleDZ1dKwtC1u96VlYLFFMoT4SfI6snzj0VOsBe%2FS9yqmtQcp9jTtlr33GHlrlMpYNuqUP5m56tu0ixEkjsxZzy431UWzuOYm7PEnKGmCPJ%2FUBWx1ZJjqLWuuLsP92QD9UerFY8y466CqtGdcNPxCSvYVrpluxnOd2jG1pACnaf9%2FrwXrtgfLRYs9NschrSHFbRySUgY3ltOkDbR%2BTL8wLWK5bgMQjbC7aU7YrrtNzZUxBXI5WrJDI7YFbyFDCSc9o8j%2F7FumQ%2Fmn0cYsnG9JpJ9gyhiTbqrEvDNNO5DFTpKS6kE7y4qivzFvQE729w4lNjse7wex%2FCv87qkgtXXXYF4t1csaDM3xLX5svTX1zNMIQIflgp32a1ciU%2B5saEvTbI9vWMXCIR4BlB%2F8qY2f8nl9REzCkS48PRk%2FhUHW1fbnq2XR51FRlwt%2FfX8tgGzA2SOB4LGEg1Y740LGz4OamYGjQpfxVpdQKAXwW58k%2Fm2sM%2BK8rRZzFWDhQ8iCRGbU71pqBn53%2Byh79%2BWEBG4w4hszAwx8uTvwY6pgHegebKBkmJWbgcvzgxxMBimVX1QC5EgvKXqsEhqbOv5lpyIXp3adL3JuFNE4vqMe4Xawla4kG5nUvDPWgdm0pZy8MHDveaRWbZArg4C3Pyf%2BT5p1Uu2DP5h5D2Jvq99kzRSXPeU2PD%2FQIa%2FPlF2shb2uIiwuTzFtYqyhsSgWiGqgSNrMwBMy9bRgAUAbDTy0xnkfF2EX7RQoXeX11MXj51gf%2F7OWR5&X-Amz-Signature=1c892be74de2d64837a22b957ad117aaaa98a0b419c03b0963d958425469e3f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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
