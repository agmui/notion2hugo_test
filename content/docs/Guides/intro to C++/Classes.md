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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKH3OW3M%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T050749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCzwox8evaQjPmxzLSTBl%2B%2BldSSt3KW28Kogfab%2FBlyCgIhAIDc1vcEo4ZGny%2Fuzw4dvJG31muUKbAhX%2FXbIaIZnMSZKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziduYflN5Matx%2Bv4Yq3ANUvM%2BtiBzafoBKIQ%2FEojt8AC3XeQQ6xT5ktZefQey8Y2B3uZg6cjKSKl4664XWzR6jKx7pEAKKbRrrW8f%2B2DysznfnIvc3lJEjf1FUEUv8pG1zHvC1ReKIl0G4t%2BZxcwpXyByaXIDSC2hEbNYED2c8%2BKurwZAOuxaeeSlhxZ3ETgnX4Xa85aubVlYRGERsGKX144kQse5Oo2fqlNDDbzS6WKvR3xwagY3ouYolygbC03OtYxHwYfmNVvrVjs%2FuW37k4BUNbDHeRRYb9FheIY2aeKl8I0UNxhHMvn46wyrmt9%2FnrHIC1x6C4iWKuPlQGttfqrDQNCs4OQaEIQWO6USSJedE4KXNC9OD10fCmDF85UFT613KbELde7K%2FVpPLkgHETB%2FA%2BlHfPXE8JnWtlrvCiINzPNQHKrJE372CymNlgKfTzwUYiispmsFe9CUbnM1Tca3P%2F7LUw3ZxkHYCFp3g1tFUj85vwQBh0qP0jg%2F%2BC1QfglM%2B0lxi9pkY5zSTKGEler32OQ6G%2F8GELCwBVWjDyTemciu%2FaizNos7ebbCxESo22F1efnF0fYbdgD0gjrpyyYzIN9cc9NQ1gh6t7K6Bz7%2FlrwO%2FrFId2j0UtMjfvdwa21AZTuHgvwVqiDC%2Bt4%2B%2BBjqkAS9zOLFeA4inPTyLIACjuRwC7mb8nlj1E9eIHGVvmFmbDHPsVO98toCTT8H%2FSoAIAN9RaawRQHGo%2FIIxVyIbxlTvIqccSO0b55jN4LgZP6pb3FonFVGGm4t%2FIViBWxzQVXqMB0xibbX9KqOGzpFUQczldoYEOq5UkJl3IvidDUWmR79TLbZIRdX9hB2tq5QMgEiAr3gRvudF0elP4Fg2ffq6GrB0&X-Amz-Signature=63c0ed1e58d624e24a2d8c5faa12ad498e8766aa02ee48e9a4d00bca14ca07de&X-Amz-SignedHeaders=host&x-id=GetObject)

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
