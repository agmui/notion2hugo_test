---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIJVMY5T%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSd%2F6AOtKF411rIPIuVJx%2BTSfGLLrQ0Khukq2v4Y0eYAiAtWBVR0xVjNuUJl6GdkWFitjQQrV6TSiXtSqFv4IKSaCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMbm8n4jSUyG4VzifJKtwD5rPi1V9DIEdkuAxi2B8X5XikowJaHmGkAErlPoeyoCJbnt7AWff4hK%2B%2F58ByQi4W98qZ8Qw%2BrvOyUhXqJPQvOZIGnHPHiedzEz%2Fyhqh5FUSR6mg8RRlDjpI%2BpC9V%2FXn5vJHodu70PBpKmzOWTGs%2BC%2FpZHRU3BASSNMwz0IIkgt6jqe5zetzSUi4Zd8kELgnEPDiilfXFbszWeFkcmgDkpYt4aobCQmbFonH3hQ7G3JmGxVvhB7QbFlJ8qkFPrqfMLo%2FmTsKc6sezKgpMvWj4LEHlZv0hKoh6vsKVPsQBvYcCSozj6OwWhTQUx3%2BSJnOVgzhmlTfKaq1YbaaTy6Ec6tO0M7Oo%2FeWKW6Kr4lG5565dkTqwqNiswKJHG%2Bl%2BkXhDgm%2Bzzf3KJwku1UtiwwdwDwvdsas%2BKUOvtSKM%2BUzNiBY4kVx6bg6ksur8oWFoS2H%2Fr8DAzGXcNjmrXXjv93J53BcSVVZPHr8VpR33ANRaqx0grGMzNoW53wiAJKolsmflL%2F4BTuNC7F%2B16BOHgzDmPvT767A1AEGe%2F2abij9fgWNzxqs4ifRpbjL8AUdwqON5ItGT7XsWm5lPACYO2c%2BedPE3IYJjmaoDms5itG88EiH8sNtbOdRxQqm8nvQwjOeowQY6pgGAI2LEJV390bzTUm6K15qm%2FMz5pfRygaqJq%2Fixq1RcwJ3mrVQooXQ8VeHJUYsGYNYr0eS9kAYN9z1ngYYDJbvnrab82%2BXJPhyCvOuuJc3QV67RHjSMpvW2z%2FkTxDI4kyaeYdDM%2BA3Qu%2F75B3R%2B5sAeJUFg4cCGsovsOv2Apq4HJJS7FZy2iSfYiKWgbnb6iH5p%2BVIcV%2F30jhNrZjCxnOUDdrByVI5z&X-Amz-Signature=0150d0190da0b95d49dc942232a285394e5058ae60715c617555a200db9a68ad&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIJVMY5T%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSd%2F6AOtKF411rIPIuVJx%2BTSfGLLrQ0Khukq2v4Y0eYAiAtWBVR0xVjNuUJl6GdkWFitjQQrV6TSiXtSqFv4IKSaCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMbm8n4jSUyG4VzifJKtwD5rPi1V9DIEdkuAxi2B8X5XikowJaHmGkAErlPoeyoCJbnt7AWff4hK%2B%2F58ByQi4W98qZ8Qw%2BrvOyUhXqJPQvOZIGnHPHiedzEz%2Fyhqh5FUSR6mg8RRlDjpI%2BpC9V%2FXn5vJHodu70PBpKmzOWTGs%2BC%2FpZHRU3BASSNMwz0IIkgt6jqe5zetzSUi4Zd8kELgnEPDiilfXFbszWeFkcmgDkpYt4aobCQmbFonH3hQ7G3JmGxVvhB7QbFlJ8qkFPrqfMLo%2FmTsKc6sezKgpMvWj4LEHlZv0hKoh6vsKVPsQBvYcCSozj6OwWhTQUx3%2BSJnOVgzhmlTfKaq1YbaaTy6Ec6tO0M7Oo%2FeWKW6Kr4lG5565dkTqwqNiswKJHG%2Bl%2BkXhDgm%2Bzzf3KJwku1UtiwwdwDwvdsas%2BKUOvtSKM%2BUzNiBY4kVx6bg6ksur8oWFoS2H%2Fr8DAzGXcNjmrXXjv93J53BcSVVZPHr8VpR33ANRaqx0grGMzNoW53wiAJKolsmflL%2F4BTuNC7F%2B16BOHgzDmPvT767A1AEGe%2F2abij9fgWNzxqs4ifRpbjL8AUdwqON5ItGT7XsWm5lPACYO2c%2BedPE3IYJjmaoDms5itG88EiH8sNtbOdRxQqm8nvQwjOeowQY6pgGAI2LEJV390bzTUm6K15qm%2FMz5pfRygaqJq%2Fixq1RcwJ3mrVQooXQ8VeHJUYsGYNYr0eS9kAYN9z1ngYYDJbvnrab82%2BXJPhyCvOuuJc3QV67RHjSMpvW2z%2FkTxDI4kyaeYdDM%2BA3Qu%2F75B3R%2B5sAeJUFg4cCGsovsOv2Apq4HJJS7FZy2iSfYiKWgbnb6iH5p%2BVIcV%2F30jhNrZjCxnOUDdrByVI5z&X-Amz-Signature=d6a0f2a61e49ee24ce749486ed51e902f059c84cd71aef188e02bf6eda9bf3f0&X-Amz-SignedHeaders=host&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
