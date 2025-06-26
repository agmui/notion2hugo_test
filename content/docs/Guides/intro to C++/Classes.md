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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDJNZEGH%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T081243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIDxiDHRklP%2B4SfnbkeMrKjZFxEO3B3UQ6VngxqqJTZmGAiEA3XPmkafJsS7k3fCj%2BKvhTSl40U9w3YZkkAahMDByS3Aq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDGcYamFYJxbA6whbnCrcA7xC7ZAopjuinIZRNUkeZDj9OtD4fzL%2FozKHd7IdtMBNTe2AidN%2F%2F147SQ6zhTXMwkdud%2FSlBOKx7h7S9PezgEyTDRGyOWSxNZ49FgLZldFZJHTP%2FIxLwCvH%2Bj5uMFZ2pQI017qL7FJUi77ypkmrK9YMhhl8r5P2Eh2ISaD8Zhr9GDkfa5htWtvJbwHHpZGBc7pfX52YhG7agbjdvntCzB5bGLQV3rDqGxi7Kg1EqnRIsUTx02R83I9DWAMisCSGk%2Fap2Fa1txukLsX7CGPtEHYAPwV%2BI4qTYgBXG%2FRPaxY81cvmhRWioHJW8vC83XF3LuJqTEM9Uk9uejWBEuEN3DBWc%2FaNNfJPclB0%2BWNS69DR%2BHQ9%2FS%2FhN%2F0i4oiWMNnSbjDqzWRdYx9ZRBUXyOpLCPFmlHJ5orRFvKfaqpYGQTRf1tIRJYs%2Byzdl6X8DDm%2FDskZsQHvxrgXNxBaXtO2HP%2Fd%2BQugNkQT6D%2FKg%2BYe5yRp3mR4isO0PXDlRa%2BvZP8ELPzFAJhNxN20Zqem6G8ZOrs3kGUimBVfJnKSCGV%2B11o511noRAejjHReXNiY5c%2B9yomVei8hNy6RIrvBh6ShngFrewzP7d1avwJTvOXSJ4jfN7cY7%2FJ%2FNboYlCSyYMOnq88IGOqUB%2BuVPji6Ep6XzmlckdAmEBJ4zchVjvB552choS9d1PB4tfd3DW04Q2dWSXXLQr5oXATz0dpJXhk9Vl32g48yhjLIttHd%2FTIR6EJiQgGcx1ZJOhiptIEtq2nh0OlOvUxwL6JoYcVfWvwdGvT1FH%2BdXr%2BJHKz1bxKkIJVnOMsSAPPx%2BW4V3eWaRJL%2FMy5oDuSlREUShh7JQz1D2am1hoG%2FYQqCRajsI&X-Amz-Signature=150b60170fd8398b1cc11f35d7568dee3c9a394c5ddb5215414727dac8ccea2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
