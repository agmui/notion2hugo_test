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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ITKB2ZQ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T140903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BEbZEN8d%2FmSiUrRW%2FSKdr6OJ7PbPlfMr07BGCyt4hGQIgJ9xiFdAxAaMn3ByNbbTB38TceCVeuHKo8kV7LYKMTNEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPpyl4KfmA2iHKixyircAzX2E85HIrUrLsmMGrrSDMm%2FcXA91xyblHKq0blmDI7hSFq7rOvcadFOROMgSha3ZN7e0zDrrukakdy9QSqhwP%2BhLDqvrkZCsR%2FCJOhEh7Sx25l2w24bw7En%2BFzXSu3ILNM02zS48HyijrPT7Ii48S88dhrSSsKZ6iuSkO4%2Fu7FkrZdVA1rgSdkMr82qno%2BvMZ97g9yMcuMmv81NhVvpNETiPookzpP5MXeDdEVO6fhj4K4hIiOQ%2FUH4iYkG7l6hdQAWNpy3Ikgm6tNC0gxhLcJZwnxMP9pJ5DkiQqDAg%2FAylLcfVhBmnBDKdW7LkEe3zOQer%2FJUm9G551CzZT9Jejvu%2FbtBQW2qe0sSbxPk00sTwoe9aGRPSlY5lG7jz3vxpoh7hMtqh5Pl%2Brnsn5mJDQXIaCNA6MP75ilswNyIN0%2FghMslvwzrabj8vd%2BIZqxYwsBaxAWaB2h4Afdvz2bxTk7Kr4LPXvxgGMJ1tkGE1FW1uAwdVMZdeTdmUs8Qy3onS2F77mTSBOji833GDB49P59BLOHv0yVH6enx%2FbcnhR4%2F1QYxxwYAr21LesgA8lz1w6%2FoDY2ZlPeVP8B9mMOWO%2F%2BsE6uMDxqn7AIv1092glfxxTU7X3YlI79C3bVGML2sxcIGOqUBl%2BWMMiwaVKf4mkJeify9XANS9u60HvI0XLITfKzBCCikDcxfvw1EJeAaf8024g6gnHv%2B3tfREv62Nx6PAJqqWLYhv188M9beC%2FH%2BpfGmGfL2M8s822mAXBwoi0KgESTYaRAAxidWTzsATgqw2WdjhFfiq8%2FlGvqivS75vWZ58gvpFmX3YImGiZk1VGjXLceDfkrMjCtpU%2BcW46fW9aN9p21%2BR63N&X-Amz-Signature=d0f8bc180811e9fd3d3354372f874d1ecd105f10c1e1498aad7af9535880e07d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
