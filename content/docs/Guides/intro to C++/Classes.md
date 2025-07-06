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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BDVDKX4%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T100840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQC9w%2FgfJm%2BDwauok8dQkYa%2FddfE4oU6yPbJIbUn000mKQIhALHd7rH1VGC%2BtZXOjPlKMy6Dazwi6PYTsDyifu85TnuqKv8DCFsQABoMNjM3NDIzMTgzODA1IgxhIeHJueaG3MHvLoUq3AOsPS5bKW2Jnvc0mSPlTCpVFfguA0%2F4ua7YKa0HMt5yhCxKVT2zqonn8JC1Bhn2IOd0WncuvKlrGKo3S3G1JocwxulFCZd0%2BDius8UGuS0T2K65ylqRU06rdBkEpiwBlnMun5a2FCi0s7%2Bc3J7Z6h5uAhngj02qf9kqU2erQOrHn4v55WeG9uIzRI6DKvyWzcrW3oe%2B7ua3PTrOCWg6nSnvVw8hAK4d5FL9yXtwelELgQtc%2BuJlIJBRPpQ%2Fma8PAN3fsrrPUte64NJ7R7sZBmW5lR8nfSkiggnbHOvRu4qfauF5aEK4je%2FBa8VBxFnBiWRwzPSKjpsCxjTNEenum7rnJFy2%2BvR0v5lKru3ykl1xs76ayA4T6zX0%2BJj9MJlg%2BCN32DHExeTAtH5c6dYdIERWmc%2FngWZKFU0MKbD552xMQkBlOZUpa%2BmNyfHjQuP1CJ3kVAlYLHTe8OBgSyYS4AfQRJB6Rd3%2F6AozZ4s2byDmo7gNHvCsUiNexsPvx4%2BKR8oeTXK3Zs%2FQjEQ%2BrLrrZWanMmtvJen%2FFJ8ZfDM8ldIqWYsdUoCFqIa4Kp77CL0O3tiV2%2FjwwYcZzfK75FAXqpHXGNz1omQevW4jeVll1TRpwwjsxphfLm%2BdQfnu%2FjDXhKnDBjqkAUrpL%2FehDv76lDfqdSi1CAg%2BKI9YrhtsYEqoqglfOHY%2F4VJwwCCgM6HGXGwuwywrD%2FzH25TG5vDwXKRjbpCqgdqQXUvVarLpK9F6L5Ldbk98bZUst0F2e9YVrnaVM3Vi5CLkG58OQSoVgrT8KCVgm7sCHGBPZ3i%2BKYpEPHIXortj93Q0x%2FBWD%2FJLLCC5qTtNKtYjfrrzTtiMb0xvs3C3e6TvEtxH&X-Amz-Signature=3633dc90b7a8136fe3267a380604c0efcf9b606781fca9d702565222c215e355&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
