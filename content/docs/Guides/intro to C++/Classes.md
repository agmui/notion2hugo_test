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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X7MRXPU%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCKzuyhwooMgeIvuq4bFJqRjz3LVdFHWjczPEmRXo93qAIgSwaIv4dzvmkI0vdlqarO2hpxp3dNJO2H%2BV5%2FaPrDT%2Foq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOOpfrc1bo%2BkcjoqrCrcAyIl9AltDHeQ8F7DB3PvQuuo8ZehucqhSKT52c8dS2RIVUGP00aQ5koe0afDjY9HUCMYSHR%2FS9i0hre6xHmzmlvGg32jwjIZABLEDMlGASCsaJGJOqaty%2BmuJGVnYQlHUsq3MIb%2FMpufIowpaGPMKaXqrzdXmOnmSIf%2FYBIrJtU0zQyS0yCpUczVPwEBhGYUXh5%2FIwsLdAnrFaAOmCCGZQgK4%2BNclT7eYMFzKrqr2f0sgSwTOpVVejKlLh1VQy6X2SZr5g12QUt8Px9x%2FHji3IVQ5NVlFhakNW9KPItTySr7vYhsF85c3Fo59HkPje%2BR802z1XH65OsAiSgX69yc8FiPvH3pgo0xDPht3VPpF9Yx73Os5vTBNLqPvOET10rvQYApvLCXEWtgM7W72AAKBUZ5ZkCT4MtWNzgIDZCuqrUMhmwgiBcVE%2Bz45hAM%2B9LoZagL98cXRaCH4rzpQ97i1nL44oUn3rs9LyC93Hif5QNVEpfSflpcoQuP6D6YUfJfJ%2BfKHQy1gOzSMPs6pz%2F6t8USoK%2B%2FwyJDqMYYVacMKvr2W3hb7NVwtUL65YKaubcNiU5dy72uqgFrxlpq3vOuqcn1OSKRX9b%2FeYUTHOcAXkVLljWsZfUsB0XuEeDbMKiP78IGOqUBe9bwoWTFkWTKidrjcqwrTDYCuWwbdVMqu%2BrW%2B3uOmahZXzsMlxdWH7BHcjAtZEMhG2lvybbdiMto2ZA%2FseB9lQjKtLFnh8zX3wkQiccNwDkEaCHSgpG5%2BhkZ28bUuXWSt7H9gZJ3DZT6bxSddN0IJLLEsQKNX7HsiMZSRy6C0pvMDRADDoCJNHzMjK3eov4j8yPe%2BR7P1PGCkECG6PzMqBHX%2B3Rr&X-Amz-Signature=3fc3b459c71148833a812236a8d217c9110e77cee5c70705c0e2cbd6e34080af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
