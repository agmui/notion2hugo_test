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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTECM6CH%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T121605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDBsev6%2BZhIjhd9NVCx7xKDHCuQXeMukbIHA%2BkC1G%2BBBAIgFwP2njWiLJlybvBeR4aX0W7MHJnrIgodUtw9LEWl9E8q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDKtioPUoX8YCidVE6yrcA7T4LssmNPJFFINfUIM43acdS%2FP6%2FQjKFSoBHeB3VZg5F7LEK0JinnInpIXFSbNA7mnKVNbBl0N%2B0MBeGQpJJhTZwRE4amYn2kk3D0%2FwZEfjVTN%2B7weBJPP53SVz%2BdG8jWUiShmp0rwgYEZUrlKhJpTH0XQTbOYSRwukR3XO5UrPQA1Ads1OiJ%2FfTe62ZZdvh4oYNiyauDkBoRp0Ciow%2F2zpTUIDpknswe7K%2Bl%2F9JO61XccoAaEwxMqFzYBRfHWz2xcp9MIIOY5HWdC3BirZZVpR%2B0ulc9ywhGcRcBTaf7WDKFnzXLx%2FawfMjC%2BfelH5EPtbjaOSIKjHBO0XnaZe2Qs5ev81RncF3nXLBYfdhae5kAg6XJcaA9TaovCxEzvSIRk%2FAZnskzIHfvkyOxV%2Fc3BWwaW7FXhzSOO5GVGxtBy7LqbPF%2F3wsV1w6U3eqG9GMZmvOst4xeBhpSNk%2FA0g4f4K%2Bq9cSLB3UYcrw15FxAgsil0ttTw7MlXKBkyrfF6xZFv%2Fnjn%2Fwt54ela84NEJ9w703RNTb26obVdedgmvQ28JcKi7CNbilmLljs8%2B6c7f0JgBNMyQBgfkjjBbqIR285y4Nz5ZBAsE9%2Fkkgz9JPTle5m%2FpI0h9W5td26M5MLPynsMGOqUBdLn%2FIucfEoQA%2FA85OdSEAXKldpbh%2BVdqZIHys7gHU7gSx%2FRAQ%2Fn2qe1BFHr4qc1HAmErQqkPgU7Sp5D%2FUMNcifxZg0mKK9MZlNqVpUlf%2BYVFMiYXqW6sKSKklEp5tQbx71OpfsUMCPK6b4CDsF%2FUMU%2BhDnHV8wTJrvQYQfNA968Ya0S56uYkzsyz1lecCe%2FvW0gVnblgTLB4wxlKV3JbUMGpA17d&X-Amz-Signature=cbc8ea801101af23349c9abb7cbbe1201bf6b2d82ee453c7e8debe3020733398&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
