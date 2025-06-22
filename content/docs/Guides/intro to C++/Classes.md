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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCJ2BVOK%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQDYHOOrloKp6CjP2dDhcGOFY0Om1EA1iMt5TyFVGtHLvwIgMVLcSR8sY9A2si6J4Q8NE%2FIr8VYZOu8whLmHxgSpskEqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLgLGiuyDNCWjHDq6SrcA1mRenb%2BcGtGuzAsiCY7pJmeRj%2F2tMhFYqULfZuGFXYNCujqe7Th3CnaJ3Z9baidtYpsRcuKa6TBa26FMkNQgO2Hhd8HgW5ddHg8VoH6Bkh9KOCBBioBE3rvRq8OD4leRY6w1jvxNwCmruA1YcwGPwyjoXU77YlCXLVO2yKLDHVvErHRMPIQa%2Fwxqah7BjA1wTYxLfXyhbB5abUvtwhfi%2F20Pv8kEU%2BjSpDVwlCoYQEcjlvq7VUULogEJgBDwtDHzIw69VtX2qZi7LSdWAPf5%2FdKK2ufwMzstrl0ncTbB32tz8SV242pAQsXbXs0IJeVj34TohyOGg9KxmWQoZ4GLuebSQQCjh15oHAYbp%2FJ9d4WzlU%2F3YbLwf30ACGyWd0uHwfjwdpFu2MDNQGS%2B08r4x2feL1PDKQqMoveT6u7cMjOdfgEHurRw1IrDi4XVvxZqHY5uCboOfzQxtWwGsWiYOUPoxetJdpaHY7j%2F6gbBj5QIIbAYM%2F1bpPKTKaoE6A1i6j9s6bK91ntIZr06x1T4bf6LHMXiNklu4%2FSrteA4ULZpNTdOq%2BIJTog4WcfFlZSk1xZo3GcphbEHHTObpF9tRuZax1g22ezbPnEaBORHJ5Ii%2B%2Fl84gj4vufAJg5MO3H4cIGOqUBY0FAhit1fiOXzB1Uqb1ixAh7XjDRcK%2FQKpJJrtLWqI%2FDyliq5MlYXK8iGVmDlJf2h8mupdsZ%2FV9pm1ueFoSurfcl8jX6y5%2BglD9dVu8qwJUT%2Be0IVUWZBXjuN9qvtdIF%2BBweiaohxkFz4vJnYm3XOV4pVqXZ9GDvc7h0%2FOpRpueJIfBhs1gI2mH56aYAR2jG0KdSGsBMzMvN1aPl9N3JILovb1yt&X-Amz-Signature=c2ea38ace59c11d246b8dd1c71ceb0961d6ed3e8db962516045af7e887dd3104&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
