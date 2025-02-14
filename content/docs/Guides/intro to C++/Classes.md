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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ4L4SZQ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCDtMmVU%2BJlnSPyqs%2FEwNXTl9KyYHgey3Unj%2FKBx%2BSKuwIgJZzYTCQcji8yHSd2bXQM07ZGHJbdiDRAeS5nxH%2Fq1k4q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDHlhG6Hb4KOtskzdcircA0P4q8jO6vVoVcpnobmTDmhSC0jvFlFSB%2BHkt14q6CBcVCThvc5zW85xF7%2F7L78IatkwXNPlyNPSZdJStb%2BrosFhCAI%2Ba6w1ok1vRVNpbrmJJgrjIZJG%2FgOEgginfZJMj6GrjPBYVhuT8vILdq5qWBf2isH454ga4U%2F06SO%2BE%2FGiuz2GNH9ggThsgHKM8mx67HByVJFuSl0gxl6fMi1pCgPR9lMXy2e83rL%2FTvaSVjn9UVQXCMaC1pvFyFP6Nhe9JbA7By5XWaAT6TuWSVbDZ0X%2B7BcqszOH4ak5luCNds6BetyhiAPGUWzBuz2u%2B4yeSBr6rl%2FSd5W1qhh%2BdETMqlz0KB5oekaOj72cjsopEI3Rv4EzUPK2y5IyshKygzuyeXhPS2CD7HzFYnyHVeVWZInaS%2FGi%2FOin4NaGeX78l3aG%2B0zg8uSwjqWqlf8Q5s3SxPMUaDS%2FRf9HWo9VdBB3WODgXigkquf23pkjfQjodWcEK7V8bGq%2FOosEYuAmhJo6jhkZVZXoSCMBNZTtcWfFZOlEgfZdfn3A0hNp60%2FTHMRF8L8%2BvdDFrEG6nVNGVdCjWUu49ZBh4B7xK4QWZgDG6JP1ql179zBF72BSBhDMsZdLaPa%2FWFZNbczFDQELMIKyvL0GOqUBzQ7giin5fGV%2BTcfrkPF%2FvtnKkdBbAV5Yh9%2B3MtfnOvddZm9XTFBWePASEi1IXj4PHBk6nwItUMRwhiTkR4tuOwNEDW0B4U0GXf7tPmunCq0LhRJ1QeQjZUcjCaikC1ADmox%2FyoAUD7U%2FiI2G2W5Y%2FppzHQgUs9njzMtZUgf1VZVNZ%2FiARCpdnmkQZ8s8Wi%2BLNbThJMYwY9qDBLJRi2%2BfHOJfCV1U&X-Amz-Signature=83e1ff061c69a430d1678b0a5ec66121875b45fd88c82f3d12d0022e97e05cc1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
