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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YE5274H%2F20260125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260125T015828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIHAGluha0Liz%2BGzc5%2FTTGkaSyPHvTzZRHhQozmPlulpVAiEA1zotrtl4%2BluI%2FoJbvD535RfPzF1QeQSbSp7JNi1AwyUq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDPdCwXnpZgW7Q106iCrcA3vsP80WYtdnvyPwwSAH1ROAs0qaABkwlRsVMV3%2BaE%2FaGf6VDRCtgL3knlHiphKMCQQhUiT%2By1hxTBRcSHHr9Vr%2BwQAj2BheW7dOaJc%2F2WiczxpK0SzTkG8AWFEcH5jNaJl3aNEvmFAYbC%2FJCiO1mC7K0hqea2BZQnM6o1h%2BktGqUNGCAmV2L3ysq2SRi0qZaAIwBPx0zUUTVwc6qMqRdWj9CJiovbCsfVTU%2B%2FE7u3RfY2kFFhBlJEmhuB9N6ONiCqCvmAqj9InelGUSgmRQsYciKC%2BS4RGG4bNy5%2FAbq7jQfs7EhgFRtogYKf7UDYYwDNHeb96z5Do%2F%2BbffXe6GWuTbxykX8u5X3PCxOmsyMOHoXaZcesXCuaUDMUncmpcDqa4f8WNCOZvypDeNtSFqNeMlM8Rps0LNtLNV7trRyx%2FXmIP7g%2F6etdTnp2mohj%2FEvibh5XXMe2AliUoDGXZ9SAyqcOJHLqosmEBu%2B6rulF9UDpLgIpNMe7eWyz2DI%2FaV5DCS3zMBZ6Lbplx6%2FVJW3ggdoG9QvqcnQnrD9I0u6%2Fsq9AS7AKw9%2Bfro%2FX1mCcbJO81xZ8O1J6dLqcnjGPAzVPxAQrLMqZSCW%2FZpjzWVUxkiEs%2BcOOyL4SxvzddrMNbv1csGOqUBBR%2BATP2KMkZVqBSxS589et7fEHJMn5Myz9%2FHKUBuUybHC%2B%2FeH%2FQMbLuh3kUNNolvQbYgXhsEq44fl%2FBvbmPPR1FcVvTtuM9XsI1jPva%2BUy7micDHOjwc%2BUoWM5uSdZpAoqOqWOiI2kXaFAUpB7PGSV9jW2AkJIweeOpdK1j6PbrzQlCyy3OxRFpD4xPyaXaKt0jzBrI0Ut4Cyif2FKumx4LZTtbS&X-Amz-Signature=16aad598719494e5410549052cac78c3b80b5b7c3d740597d97d3ab8487965c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
