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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBMGPBN7%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T031206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHQhvLr8UFF2%2BIMzoxK%2F4sHB%2BJohstecStvykXEHZ%2Fu8AiEA1SIftgptgcx6xWw5SPsvbd01BUpLUI11UMBK%2FF0yM5oq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJhSKPyhffhYlCPN0SrcAzM3q%2Fu%2Fy8O%2Fk9wVpoe7R8m%2FVyoatOtybeu0vKyqOiVl4sikVe1nyEuLyFKve03gfWjAN1Qlqlg4uRAmXPu0FhQKOo0cEXdlyKGtUwhmrDDZVopG6HLc7QqlmDQo6qHqdns2%2BoKFUBxsn4EUKUjSD7b8GAbqoB0vQMANMNgeo42KBmWmMq8XiYgWjgksWStCjs6JM6HlgAJIeNW%2B1KlYqnH%2BmqP7ZaFpGEGj%2Fuy%2BlDQMdOlfGN5QdZ9Ob58i5tySi6U7soOU1wRtRFU%2Fn82881ZuTo%2FDLiJ%2FbpwGGaaeELmBgdpJywTbnwF6Djd%2B66c7VrvA48A%2BtBssQoKEaij3HGg4KJWMvX5f7vCFR2%2FagNROFGA80tarBeRodRykabGFCeoX4ewCumG5HFCq2ZA54Fu%2FWg8KvMgid5VN8XzxzYm3TzIJQLURWN4Y%2FXW2RDEBuN9B4uw8E8xYp733olFFqMxShDGTyiklzXpGkRiJEaC6ThzEhTKsAEUFQLlsXvJ8y2TbWKxt%2ByzEbmHmywFd7QIBgVETsIO0Xr4enB8z0k7h%2FpMb8W3q2VBynHM4xaYlkW3WI6LApyXl4WU6KNACP1LJ3H4EEi%2F74SOVvKsHlVJvOlviBXFlNTAZnUdzMMnRur0GOqUBo3HasB0gIo8gyy0DdcSHuF7KE5sE9hI0%2FXt0sW1MYlWcFKojegeezoxsKKEaN68S2Czq%2FPpRwXMasoyelwnrOr6Zkm9LTXTj8mwObd1dMRPZYM6wU7EFDVXa60g%2FER4yEpsDx96tuPAfwO%2FOzch1Z%2B7wqVvhaayXif%2BRx1q1CRIswP5miNC9yX4MBACqhOiQxHfUXD9XCQBFHZ4XHS2a%2BlTEqB%2F0&X-Amz-Signature=a262ae2227442b7e73d63e31b288b6153474b06bca5d4941b7ea1d148444c31d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
