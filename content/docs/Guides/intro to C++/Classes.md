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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCI7IO6G%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T131006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDM7WvdGGut9Q8s59Psclf9OzofqlpJ%2FAxcL2%2BNeCYtrAiEA0DXjB4ak6E72s2WRuIj2SG2imbma%2BJ3EZEaQ4%2BbiKkYqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIRaFByN8GbpHIYp3CrcA3uVDnNO01EcqR%2BvQ8tjLCYV0nyWjj75bK%2Fu%2BqXP3yB5PqoJ3HdhXJ%2B6ssm1yvtbjUHRpnKhVC4tnT88MEMS3F8kIMuVnmRSidFQI4da5dSwO%2FC%2BfYbk4q%2B%2Ba0v%2BfGuzqP8Dz6HNRxdn3fet7FUaHwv2mZ56uTAFEqMK6NjnoYPNtRxj99h%2BEm3Kq%2FDI59fZGAuaESVCYv2WTk6WE8ExLj05%2BATyZqTqY4NXi7bMG6PufnDr%2Fdk8Fpo77awgO3%2BhiDdITfdUJfu8ipvHTEvBiF9JpCzA99a4cR2R7sIUgqWfAk6C7%2FcDoYJ59Wb9qcKwcLTORQ05N5X0x%2FMYwHlTzkI%2BYJpoxkhbG8i2yu0JfNb133HRYGRlAWiThDarDDO%2FnSC7%2BGuBQG%2BB8YtXih1CBeAqnQnmCmUj3Xkku8uI9DazaPn28HvfMevpxDiL9cwgPF7zmLDTsw8FNfUdJg%2F%2BTcKZhUeDLskpeXaD065H%2FoBvENr5CH%2BRr%2Bvbey5rXb5ANGnT9ETqb0vTNjy8lCXWAS8%2FQy4JTt5XZNagDuobucEKavpA07EOVxFMIGrjoXQVjTIJRj2UBat%2Fnsbxf9OsDmajhrYAk4jFOj9o86jxIjt1RRRvtZ4vawEkj%2BSkMILkob0GOqUBI5YK3xM3QYN717TOcnBzARXlCHctMcpr36g2%2FOfz%2Bxkue4fssKNd2WfyYoW9RDLSFBn9elMsr6cVnzlceRAVOpoQ1dyQM5g8DYa2QX6DWHH5onP%2FD9TgDG7o9szvRkAbvtlae71ChCXnnhn6l2SOYu%2BeeIk1c5t6adpm3qc3Cp7CL9Daoqh5p4Ig%2FHKKXd0LL9nB6Puu3J%2FlGwYOmx2jBzvaJDKh&X-Amz-Signature=d13e9785e155843f2dc865e15697bd0d0631ae67367599d3032a9fcaaef63523&X-Amz-SignedHeaders=host&x-id=GetObject)

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
