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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNZNBNNS%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T024020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAFt2xJoW1wwpTI5ApuzZlnMcUC6fuyVemMNY9LN83QuAiAvQ5M%2B0P6zmV%2Ffz25IvxvB9lcRZIM%2BVLmTfxbJ6iemrCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjN02ydgEQ8w5ynRFKtwDUP0%2BMb60HUvnXGI3UMwIBXj7REYJ9iRxSLBlPy73RLwqBKP22KyVIVnKOqHc9KQ1VnXEXCWj0JPXb16QEelUfJ8z4fLCyROMRxjJQ0mbFkUUh1%2F3YIBBbaS9hLjxeV0y3E9xteOA16OvIASwwHempEv0WF%2F05uTM23Xfkr9PKDNlncL2IMpP0HXCIO8aL%2FZRWYqzmMen8hql1bFobt8WGYdqbaxiPzZS8JynPHb4GqmRtWrHWcP9pjTNjavA70FT61OKGcfzHbtcriq1S1MNXdGTlB7hy2yaIRzPCq9GMPQDwoDqp2OJzHJnJX%2FZNP5O%2B8th3nDYtPSJ9jyp0vCEiccrx5uXMQXY3f89XHCEBMHanIplnfpkSkgKtVA7pkWR3%2FRiV4%2FMxod0853PjM5zIUJrVafR5DWB%2BlE%2FneK%2F84csRZmT7zXwky3GQQRySzHsrDjzpXPV1BiirQTWOwEsm4Nj5X3gmAGgRgtWsA2QOOkVHnO0LNyuA3fgteXFr3y3YnVM%2B7l9lpqA8b14K45P4K3YHHij9VMHLCQbsA7X%2BsrAEL6025S%2FILI4sgmq9%2BhDhqadoQkn61py4DdJuqSRsf0wWTE5S9X%2BN8jaJ1i3ndS8JC4sO%2FKPeulC8NcwnKeewgY6pgHjLF4t2QQjSgPUSRywSvk2OEaOqzs1lvAijPppTpXCFChFkXQ0CZaQ6971gMnduZx4NVtZjNmdNYUQEl3MiZC%2FxyAWwSaRb%2FV28nyhym84ebmW5JdM3AirYU3gh9EJUPGGEL0scNki1t2pD2BW%2FK9Rc%2FFrQpjF7gt4IxNmEy1si7xGBQRN9TkK54116DCkJmE2KW8zZb8DIbuQlTiejVRw1BI1jQ3j&X-Amz-Signature=90078a8439ad3d786f082b765c92153e72463d397e9142a45b6309538e8e8ee6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
