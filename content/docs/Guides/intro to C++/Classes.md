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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5E3W657%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T230730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDVOScGAz3Zb4MwAyQNiKzWOs9V1b6c4hqyGh1ia8iDWwIgKkW6wfYCsOSYjTCUEdjkZ9j7JyRZoepkTojBdIEEfQEq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDAkxSbTgZX0CHmh9%2FyrcAzjTuoHrUZcavuW4c2g%2Bf%2BS5tXjQ8tQTX%2BprDZpF9Ev1%2BlHYxNjewikLThdGL3RU05l%2Bu5keEmgjhz27EKskXp8kmCs0qobwJD5jftQQfgxCAoBFWwF0cg9xDMO9N7R53j8s3UgsIA3R42HcC9AtrUpjGgdG3GFFG1hWDHH5KDsgj7fviLBfkrp13DVjAytFWwDP98zm2g9hJQyMbnX7ipkL0zbDDwIJzSoIWopMhJfHhzk2biutMb%2FEZF3320BW8xZPRYlpoyYq9d6obA83vUC%2BgO35m1dUjBTOwfj6SAiwEoqWOCtdMxgVH3hUa%2B9kCm9sOPZl55%2Fy1abf4byh0mmeR%2Be57cZRnkpY8sntBmZ%2BKfEsOCmB1y5I5jJfCYL%2FA1cA59Nsfw8PNAjB%2FPYIC%2BETMlw1UztVheGrf%2Fj9pHsjAzhTQ%2BtQbVRhXFON%2Bt4HulyA2ZoCMRP9Y%2BDbiMRCTRE32Dbvd2%2BmEKn7ajrooxae8i8UZvgPqZCYE1OyOGKSDkrO%2BU4ki6X6ZPo53%2BmsODiKPIs6AqS5FinnsCkyGTHr0E9cnwWZU76pH8DGVBUC0oAU6ieBADHRGFJceDsSiszdErdXSxmPgCVnWS2Zy7fsKe9oMMRdmqJQLs6CMLy7jr0GOqUBhuoCJb6PJRf%2FIg3Kj4T7k8osFa87zYS58hlrvRauNBMgh8Aow%2BTxitlUGfDpfU04Lutwam8QAybR6SzTYmHF6NIbzPC9YjbAmiJTm3RdyrYvmj%2FUxkTg8msECKuKWGr1PjvGAg35Sf2nHYhT1QPRwYp7BnG7pWax7vH5WqDBOHIeCNa92Ckm5SDH2fsqQhshsbLlVGpP%2F6aJWdExfz4ZMAkvDP3X&X-Amz-Signature=4ce03db2ad0b87ed065e2c2c34e32a3be419598ee2a5c7df54b522f4a60b2808&X-Amz-SignedHeaders=host&x-id=GetObject)

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
