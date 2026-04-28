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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR47IAKW%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCeJg02F6x56exbrpSLdY4Os77f8fk1YL88WyOlti0PuAIgMsxIHGepJfvgRMDZPce87r4n9S4%2FtpP2OFYCXmT4%2FXcqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPG9xr%2BZhS%2BUhi%2B65SrcA1MTUHu4dknYxed76o7O8BElQyGhLK183RdAA%2FDl%2FELlqU%2Bg7JEXgDKD1mLnirva77PEGZvAkzMA4H7eVhVdzmkEBanV0UfCECV17UCtqIFpPAMxSV%2B0DzGgLdGiGDr00PJkisgmZ6ZURTh3JNp5vVNLb28CJsiOyUCP%2Benx68eJWgm9QZcAxIJxCiBPfQWWp4Usiondgb1MV42PAcJWLFt%2FC6ajkctvlBXIBzKTb%2FvabRGZsXdffRJXOzn8W1buAKB0ZTbPqqoa7Rb%2B%2BxQBOE1CQQuVFYvpyvqxPjBhWjwcAZrZUR%2B4VHZOs9pCZTvc7NixpdIwGWjzOqP%2FWNugKoBTdwQfTxQ7RvuG5Euk1Gtg37vCZJ3Ni0BV2U4R1%2BRtQY8muHA%2B0MAPzxrOorvahHBusL3Bf%2Fa2qPT99eRsGtNFnwgf2i8VrF6yFNqb6mpcaBnyAXsIki8y%2FwmNiDoCKB5SoALpDvnWH13geKRnfcTEE0GRY%2Bn%2BadJvG0UcHnDT3nvVvrJ7oarU0Y7MlaLREvTI2a0P4fUzirL8NwwNO49RHWFi1mQqsKTZYGw4SeYFZUtMkIgsDtz8sNSDK%2FPNw%2F8pJe09hMa3qrt3wCxL9%2FAbcK%2Bp8BOdhy7sX83xMICjwM8GOqUBzwqvSBOpHHCoM19W9%2BE87%2B5ObsmJ7nwAohKjstovW4fK%2BAoqmVih%2FrI06Td2rjpD%2B0JXWMpCBA53YjH9XSZbpNpU8ujA3nEuy%2FzF4IyqnmjHhHoqCRtJZn75lhfWQFdmQ%2BG1eH9V3d%2Bra%2FjYBm3kiU1EFcr0nrajguPleXKPLtV528%2BQFmKReTVsL0luwQ6wld0r5EnGIZsIjk7deCkkDIXRObVB&X-Amz-Signature=a678c699255f46434a17087245ec5b322adacb83400188ca83681b889fb59902&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
