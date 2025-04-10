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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TI7DTKU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T090859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIE3ThWe%2FpF0s8hdOiwKLMyYLjPiye4BiErnfRDwCbTFyAiEA9KtyeYNKbdFHlGmjLhRsnD3mN%2Btf%2BxrmLiJhhxfMG9sqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM29YhbIx2jSO%2FvS%2BircA5%2FcniPx%2BRwiu7UiE0AfVE2zd4el27CMcAkLbYL4A53n4ixXsE9Hiy7EVSVZmEA9e4S%2Fh2XAs0fi4K2iPdw0heZF9Nf8dqmkynicV1vXtidrApqFxkbd2eychmU%2F95kYgCzu5202IPf0J56j6SdOi8XTwAcJeOEEIdIkNcdswILiQRcTVBDTADQexx9HSA0IFd4wfHf1dUZE10zwF84nmYSP77IAEh9GE3iDWYrwIeCA5FMv53V1p%2FKu9MNsQjpgWYhjnl%2BI%2BLbzVG9rfh%2FooAAcFgMFn9g8FlA2ZdowZSlOzTP8Hdf3wQmkTEY80ca0d1PrgG08SDfLJ4IBizCUf5giML%2BfYzgd2tvSTamXzvVFvTUAtW2f1gul5RjEb%2BW8lgVAZOH4ofcrUva3wXUZqqupLzHeqyx9p9bfHcVCzD%2FbTCIOObsWjjlmk2JFNr0bzPKpIgkOZKEAOl7O%2FJIOw2P3hSEvDxKSgnbXU32LMSiMuuIMshtPKTUelpkch5h%2FyA7D9tln31qeO4XKnJcvwcUHl7g0nYixEZh%2FJdm0s6EVp6oEUUSSOh7a0Z3t7vJHgQBR1MGxiPadg5f5lWBpm5c44HFKaFkPCDjS2JV5BgT64kMI6dK0fLDM6plxMKWL3r8GOqUB5ZM5j6YkscI%2FEC2yRMYWPMkPKrH%2Bbt0FiomIdpzil6wFGh83a6DQkCzVz7hIFT%2BC3%2FpExNYwjNdjMElxHgIzaOIpxVfKSuHYgMP%2Fn6WEshYqDSi%2FAFZ6GAwWS%2FToJrvBNGqhApgcPQsTUeYZBhY%2F6BdWWLzQ2qHU5Fyh0geSDqC%2Bjc5DnozGEtm54o1V2VJ2fzV%2FWqAJFRSHNJX%2F4jIJscSqqVPS&X-Amz-Signature=0385361358a777240c7765b4f589f7a062685f4511130f691347aee82a1d61d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
