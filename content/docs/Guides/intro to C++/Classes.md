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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHJRPDGP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQD2xtQykO%2FOd%2F%2BgmQQelAXDYXAS0QWO9aoPzQfzI%2BWZZwIgLS%2FvZw6a4N0W5WQJRv7aHHNnVC5nQZsiAPqF%2FeYPfTkqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFyG0n18vg%2FugFSCLyrcAyp9wal7YlmWZnzCc4JlUuigGFFCIMYQD6VM4Xd%2B%2B4oGnl%2FgxswRjZXblseBdbkH%2FUpLOO1m%2BK6pe2KhJ8uob7kRdZdKLCis6P%2BsMBC%2FTSMdOLlvu2OAYrCFHm1aYHhb%2FAIMzP8Lgy2%2B8NblvY3PwRE8ZYp9qFmiNEmxXsKasF8H9sVWRiNEg5EIxYC%2By7lfwh1VmRm0BAYON5FH28Ebcyos0W3VwCi6LGSnfjcwjV%2B5jGegvNYOC1p7Vn5Uyeu10KeWDAOFFeB7pbYoOy5gW4ljc3aueYmLaV%2BhjsO%2FuoYTnGhPxWQ1oCzqppxP29HKY5Rrsci8fUzCmzTaMv%2BFosxmutfSRedo9ICOY8hUaCpr9CtnGvKlXQwav%2B6oR92IANXWwy86lCDlyFvQQWnXHVUpox6UB%2BwhDWU2KnUjSR2H4MrScKrhmLUnqZdRulhAx7HxrstAe3w8%2F44vSTwnZd2lETA0UDCnMzsEzzqQe%2FBV3rbqJ0OuGMYIyRLgCm2ltgRDZNjiqTyNe%2Fn24l9abRBdCiMumUu2%2FpfF6E3YIn1rdlNXlbYwKbKl7HovD54cW63rDR7Ul1GhoCuNThODAPyOEIoEXdeIs66oUAKik6%2FhDIa95z35pFucAvW5MIfrnMQGOqUBzu%2BOf3M%2BMzrhbEau4F4SlEy7pjRThOIgyZcST6bMZdpFnC6qZ07fTuuob5smVtaknkXJ5BP9vZIJINlM1TfY66f%2BBi4%2BC47ZlVnNtnJvqOTn5WqcVY%2FjUM3o5TzRIllCoHCF%2BLPcbsRTm4mCmQdDRVdze6VUG%2BdQgI1YqJQFwpSsGLop%2BYRrpZ0l5aggCFg6kiPVXnWK0XoMeseKia%2FtWGxpu9xY&X-Amz-Signature=8d2142a63f49c360f3078c7d63ddb05dacc125d2c837664a42b26863787da148&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
