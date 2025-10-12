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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R4NKVL3%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIFNcGiwlfoskLDAo0NIvVuVNVTaN8kQEXyashad7YD9FAiEA4fUlOXNMG68ZAp%2Fegy0BqHPpBLdlNRhLUsn%2F0h8y3GAq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDExi8qlWdK%2BYuZIxxCrcA%2Fmd7Vvs%2FTUZY%2FB0%2FnDQAyixc2aa5jkhsOP%2FH6PpgLEIrDrlnsu6iiQgFV5CDxd0EYCt4nGf89R%2BpzlFKHmlB2k2KdAl%2BeQ1NS3SN0TD%2FaEKwSwQopAdjY3eProhjguLazQvXDimDnR7Aj%2BuVRuyf4vpBmjaZXq1AeclQQD7Lzql9RR0BPqpO%2BWwzTA49KndtO8AuoNUe9ekum45H%2FoDAwVdCFUXUSVkASyT%2Buy1592elmqgJ16EYZBzFaTOmRAtGOmzE3thQ4dNdGUrdi5YJykqzxpAaNaVgPnV7JsTq%2BgLuaGy%2FQb5f7B4CXBeevGlO%2FyXlklZgs3ACn%2B%2BK8t8hkDuAFolNd%2FIsO9aj83A6CslAGZ1lh1wMjH7yw9eElteMI4Iu2vdW%2Bb4xsIDrU%2BVVFelxHBiYO2%2Bel0dI8ZPLwE%2B%2FgdX7Eh375ZHHpKqvN8RUF9Nb5Ps6D3HSpxuMRQU9mJCRBK3QaJ4wppulNfifeTNqV5ZSUrxHoNv7GC8qcagItNNfvKqfH1KRzDdBtlEbd84YW1Yi8Tk0PBZFxzBGGznaHVlXZJ55mhlkVHNwLLYeS%2BYU4L3baucuToZYQxWXoqVS6xuwVIhCJ3uGo7xOe8Rovix2nWnTcXHbFrIMMa5q8cGOqUBQyQDrkqxkUxyc40aFgFze6vUReWNbRr%2FsPa5UN3O0N%2B0badLI4jWztrbaLynFlngfNXDO%2BuUxZvz0Kcz8GEMdWXVLWpi9wAxfOIYv1S3mB%2BIRW9QHFd9Stz6W9PtDeM%2Bd%2BqyxqabCYde2g9W46%2B2XydxafOj03FxJI6eO1ETHu4ieVhs%2BVyINUJr8Lws5z%2Bmf7d98H8TDY%2F2wU9HvzvH4xHNkLnw&X-Amz-Signature=79ecadc089846a38bdab9e90cad43e5c21a01547d6cc40e396ebec7cabbb7762&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
