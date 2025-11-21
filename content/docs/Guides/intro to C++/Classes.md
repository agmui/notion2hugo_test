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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622KS33JV%2F20251121%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251121T013756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCICgakB5c3vrZVVmLTBKV64OK1Umn7bSeG0AvXFOr2v%2FjAiBiEBC%2BL0JKhNX9VqzdcnuEyxBwvmRa8sl5L%2BFiLlhwryr%2FAwgDEAAaDDYzNzQyMzE4MzgwNSIMskgWziawFmekGRjSKtwDYcSY5Uh9t71bbPq3IHSko5Lyd2l0sWn0NwhXTzMENWuncFZhVcR30TnToJQA5%2BI%2F6E6N87Q2lWy3Rm63F31NP1NODbMNhD3rDdBqlukNqW6hjAsGnUdWLLNudMZ9eBSt%2B9FfFH8Cyc9xXyi4t5u6gIPgQlERqofL55Gi4qJvF86XrBUq%2FX4QwEGDpDleez%2FZlDJvkK1AZlfVyMSMaNkNxDuoGNfjF3Lp39AyxlQSoAVywmSXOBEsQylouazyCVN3UDTFHnjJu3%2FhvoCzwPFNctML1eKacfAHCWFQfgEDYm%2FH9Cj4YyFF9cyIHZDX%2BqCL%2BtvEwSA9XLdqHAEFlYo%2B0an7xYf6OMglegTlzDYNkuFtnk67I2oPFfqcn2fK8hSgpTA20FHENNig7uENbBYP8DV13tqm1pbVTJala79g18kWtvImrLLNEUXyR9MvsCr0DpqJho4rzt4AoM1g3ekSfi5CxK3az1wkVTawuDEV4jB7pf3ikq%2FaxKWcESyHcWvXh4JHF5mD%2FMrHqQtHTzzdWR6bkQIqijI90b3Sv2GC%2BfBZT%2BEQ9b5X%2F7pWZTEXCielP76v%2BT2tap9XEtN98Hu7UdhteatpOFMGX%2Bj6ssxtHPCLgmGaDkXk4yECMP4w0ID%2FyAY6pgEZpnNhmkd34zO%2FOZPLSpPHAY%2FOZAbpCsg2ZGXqgLaOHAgwvmir6%2BNYdS79%2FYVTheGUVripAAqIZl%2F43AnuAYIqvE0ijNuw4sIFuXZXOlEbtO8Z9%2FE%2FkDO8A3flxmxCTnTMhd2Crx14cOlpqYJIbDWPE5GMuFKwgH5bpF9gE2QCJrXKpknS%2BTyPALTNQSTKSyNZGQ5qg7BJGHFyB%2Fpjd%2F1sWj8nwBZa&X-Amz-Signature=2715f9de4c673914189ad405c59557002464ba7e2eef84bba95287affba5a0bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
