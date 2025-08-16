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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LTV3VOX%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T150749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDF0tTjqEr0Yd9qC4ccyzPD8T159sP27reRnY%2FolkBhFQIgZYBdH4iHho4s9Irn%2FsvSGdiQ6lKuztuHNlzswUhXa5Mq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBESNn4d1JGunU0bqircA0%2BE0G0vT5Kzmvc0AStFK3dNUo4sG8f2xvdkGNH4q4yFYYAqzeB1ER4ppqJw5gyF9d0GFX%2Fz7tZVEwVYHk6Sx2xUdI0%2BURzOP9oQNQXE441R8JDTurK%2FnqVNqxJBXoJqBukIGOeMmpA22iy%2B12PIaKj5ee7klHZuHEIunM%2Bed%2BqtbCwy2OqqI6dQp6Q8iGmkhCy%2F%2FtJnHIiSZMnPOOEL4GtVVrR6oun5E7PQJHF3OPGH%2Bd6fohiWwS2f6ZpmdhtCGSKCm7IoGoKpp08zY3st8Eecpw9Ejw2iG5SIWXUKYRS%2BB7Nko3t1DIOSj%2FZ6Mcc9ue7Kt%2BJUB0DSLPxDESnXS8iCnWl9aYNZ7FpSi43TZVPSMPK%2FnfngSjbXKaoiKznMU0mIQ7bq3wvLHNWvJ0OcAy5sJg02hiW7vS79NbckdLATyIr4bR9nQdvwGzmx4mFARPUz8GU2XSZbd71xsLA7Z001egyyX4s0WfXH0TKxMpBu5NVAdRMjQ%2BI%2BxPA6jKe93Ti1g%2BCvXw7AYDem%2FvmwmCOKu1zXQPMUI0LzBTN41KIpmtczW595UXq%2FDQ%2FEuBATje9jlg3vGNaCtRiXf6WBkj9ugAj29oYzq7sxbmyKx0KXWzSSAcCAZDee%2BaZ8MKCXgsUGOqUB%2F9KnaaL%2F6Zo4zJVyOkJq8cokfAX8suYlZvTzP94RXvgjXHnbeDQi67CUcHKEZoYSZ1Sk3d0BszDd2s3cyKT3qM0Ac3lPKN%2Bdt%2BFtV0C%2BKjlaxv4ENHQ%2Ba%2F1l14W1h7FbHOF%2FQrxzOxO8JKQI%2FUId0R5n9yjdQkx7QAEd4hFUpm92BsbNoJkFp3v%2BhuB9vo5wvDjuTpxJN9BbQAHs7lt2zN%2F8b2tI&X-Amz-Signature=e4bcd64ab885d6e21e1544c9d25cf35191fd00a908d4a10040f482ca69218396&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
