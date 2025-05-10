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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI7I6GNP%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T190159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJGMEQCIESmctiCox6NOvFhvWnUefbgxI9SkXf51HLGwXSIi%2FmgAiBUAasIPIZOSzEkenprGsXYCFD%2FgZ88SWKyt2v1hbSevyqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcK5EaTHKFTqxXG4NKtwDwsQJMV%2FZ6zijA6jIMv7udizoYEKKiUt7pb3b3NsBlvqmXj7Mh0KfGSwOgC3islBsfICB3LehJsUuVMzsDvzb728GDBKp1A12DmOWWuFzdcIbUVufO5wEXo3aM1RnKpMFD4S9WlD8tV%2B%2BcS3IAYvpnV8aSiKSI9lybjpGJ77P0Sy%2F9nHW6G%2BEyGnzBL1Hty6HT0UpJZDSQBWxtlTf8n0N1uuhsYbSo4XlcXY8KV8HT%2BuOa8cxvSWBvteAHLT%2FoGH9xhKBeOAqr2viEBAtoiF%2BI5oqiF8vQkuiDMFxKwS43zLyFgyXFgwVh%2ByZWel%2FfjFcStkfniua%2BErqYbzTHUcJVBWsEh1vziRek5peurRXAwsBMS8t5Hx4kj5GUFNc19oedW3eYCdSVQibG%2BCooxdu5OWIOf1WLVtgsopUg18RYTrWuVmMLCLiiPX9rHeCUH5CZYNn3of1i129Nc8c%2Fc43MOMxwPrjlt0YkgmQR2CYE3sE1EWuRDKijgXKjScBiVVvJdOH1FvhvI%2BpnNb79wZDh9fxLIa5jdwkqciGiZvyH2wmYVMcEm%2Fbt7f3zR%2B8rKMFgJwyZGgYX%2B%2Fs4ohHwv92qrDkk%2FcJznl3t0UMb2zgVwD5D4DtSjCjv%2F6WKzIwtbr%2BwAY6pgGYan3As0tOiQJCsLbZzOQK%2FWwN3rn0NQREhlZSjDxYXtCVy4xiFj8oCzeVKYJMxffZp0a3iVxPp2IyWByYFu9EmQPpiPlMl4P5jxPajIUF1rHNOyaMulWgwifu7IY1yzM28BYIHnrv0rFIZIsskesQcKZdgWmfimB0CM9upWcZPn4Bi3TaRj9zPq3oDq7tMv6RHtjoB%2FL9vAS3NFl33fxiP4N8OUtT&X-Amz-Signature=640f10b5f3df4e0ef60a91a1808dba8fc99b8c0b9a5c22b514da49f71e9658c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
