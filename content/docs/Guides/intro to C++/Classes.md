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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F3BFKM5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T004522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQDAq5XEXZWC%2FG1tOlpKYOq9XvlHaqBMENDzuyPzsg%2BHcAIhAM8EuuHpYC3oIVWrge0wRhvBM1484BtxzY5u3uU8hpSlKv8DCDkQABoMNjM3NDIzMTgzODA1IgxGL3XXjMDOPMNp%2FW0q3AMzfyjbl%2BDd2%2FxZN2ZajgZgF3BYW%2FBAQWjkRbmS9jfT576dF8ilJgflxNDPFA9gQKZN4A093xEIOIajbIM8V4CPFmgs8elHe2L0Cl%2FVGo5BglUR9t2fjD5bm3lswCCKJZuxKwUGlun9Cac0dszghXExz0h9P395x9E5crFZAvu7MMHeHak3FfnGvKsQ2gsGyOWkxs8rNTIzFUDcfu4IwlKalUgJut4PJ%2BifKXOFWehj4xlulp%2B20x1SCL72i8U43srw0PBK9RNQ6ECV9IXAF18PZDMJkbvWyQVExQmkwa6sTrT7iYGashLpwsQ%2FQBpf1MCna2HJH0pVSDbsxEmL8hPcQgM41MN%2B5SbLxpTA34Jo9bquRzmo%2B3gJlQvcrE%2BnX1N8Hk%2B1MO5VNmlIcTikNccDYy9Fr3%2Bzhwp%2FuzCPAct8UB6mTpzWGVjvOB2EpgW2GYKQF4YYmcbQJJgqZsusPGcwr78C9X%2FOC2yLiUpEFml2kXUZEY76gSsEtROWbYDl2GQy8P%2F59G%2BZHOBaxIn2VcHzV%2BsLHzaLphKuZR5vuLDpmX7D%2FC31HCyc9QJyaffYpck7fGXsLgEvDbiByPwwBdbYYF7wmGTTNUu%2BUt%2FHKLTm0tzzqRu9JiEnzTfp1DDxiYvEBjqkAfe5fIfo1RE4g9mJGx2OW6anVTNykLmOSmkGeXy9Izaa409Z3Y461YVjBZdi6QmgEpKKg6Yag6EjKDX5D6QjsLcUe4YjUpLIxAU3j%2F%2FSXWjZK63dbXeFQbOpzDTCyCTYLyxY3CE1XpO9GQiBMVJ4TqY%2FCJg%2BUf7PvrRc72jkPvZIeYI%2B4CZsuk7%2BKRGs7gQFWvyqWB%2B9fCL0pbACPYEMenvhWpHZ&X-Amz-Signature=146e3ac2aa3e4b076d9a59c171265cf94e2334bd0f92c76425cf58ca6b585730&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
