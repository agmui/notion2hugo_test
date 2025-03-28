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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BCBDPBE%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T200910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH27YRc0Ej%2FJPzJFtfB%2FMjP%2BgHEIF0CqNjrkBxBXa6NvAiAQUAwNoMnzV%2Booo%2B5Py4T8Z1cDeJsO2jHbtEhIbLSCnyr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMkDBhyP%2BAocfihxrlKtwDVvlnmG0ScnNbjmvtq7eh50hORkujZANg5JDjOrniZIdPPbFJLea4HXrnC1K1DX7IiJGPenvfLvDxZphlY8tCHQExKCeBp3SXONKf0qPmroRFvoOvJV0f0OAMrG07iauNE9NagUVcpsMf%2Fippt8CNHlEoq63vq6p0T1xxYekHqOxMNa9fIIMA09D78tW3dH9GNqTM0VdN60BRS38WsalFIEHF2CYEbm2rsdtMtnyUz1GObYQvAvcotf2zzVTiHuxUVk2bAcFgsqbCBHjKNU%2BgMnjCP%2BOZnsEef0as0wX4ygaL%2BeVPlwVAlqFWHoYHcKrk5kLyPE54dU3cOd57wYIbbFl3X9oqDlgGE%2FZ%2B0WRKz90aEeA43KKnWxu9R9vR75Xz4N6FOFSpVQai%2Bh0AgeH%2F8dpOYCUlR5ItwAvlAfE%2FuUCWKS3rZhCm284EL0sXmYmQqiyA8FQ%2Fna2%2F2pcog%2Fl1CWaB%2BzwRDH9BVU4ZlQ4DGdb9j4Bm0y%2B3BovlZ2ro4j%2FH7UXOZMsXmt5a6ze1rUzMFTco330XAy7Usob4%2Bb%2B2K%2BX0y5nvc9t2C8mrX527QEjJpKXSHSacNK3wtkA57L5eEsMAd7vMy9b%2F6LdvJWa7OOYxL65s7pTKJ3%2F%2BiZ0wqvWbvwY6pgGLQql0Ux%2FcvDQUxZ5NZhXqbeELkjG0LpVFVxkcf%2FiHXhMATtOxfKzml%2F6dN7TW2r4WWVGBif0Go5LqLwGPiiUtNklSmN6NVCs2QyzJnYDoc2cmPwHd8DEa6ApAdHQC7V1pi6sY1BxUhdyyuQ0SHP1oCPBTgu%2BFUzBgYbJmbtzDWZUqLsitXCNyk2F5820HNYL5g5sn%2BpTQzrC7Bwgdf5xPy7F2Bxdd&X-Amz-Signature=b7d28f8f9837b5447b5e100e0215689928360a2c1f0bb7c634627a260dffc72d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
