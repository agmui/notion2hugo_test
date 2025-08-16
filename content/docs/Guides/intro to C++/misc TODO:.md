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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVA7YC4P%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIFJjz4G0311xY49LStQ0H%2Ff7oyp4jVKepC9sgb9H%2BEswAiBwrQOa98EnypGe72EdqtwvsPahMD7OqiZ%2BLDCr5TYRSSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMVHge1laFOFEhj%2B%2F9KtwDngXoWXI6U7o7VdXSVzJDLouaqPvZ9VkqDgqQeMANdqfZUPVnBFd24VB3GgSOk1UArEr5NvKy3m5LeTC4NCY8VXyBsMY%2BL8w%2FEiC27eiPc1bDkNJdGVI%2F7Wusm9uiSJqepr2XgDgqbVX9f3AM%2BC%2FTaBrFET1it%2FTQJSdi0zx37S3BjCRUakqECZcmn%2Fceqww1bBUJyuUraQQZMtQ%2Bwmqw47VW9Dx5lgInQmuYqD5pLtWG7FZb%2Fa5Ft6%2BAepY7PzCgfvdNxEReJOW3Bf95kDZggvlpR6EqK9GzEOMxk%2FRymyHH7Yiqw8TwsF3X49nMaS0FokseFoRf37QtV3dflefJqrvDJg6T2Tn3YXUcp6r6ynzRs7LTj8y5%2FB2YFdJ33sMteEapWebyPKGeZ2kjowi3Ega5cc3TfZUpd4x1kXDdDfue%2BAlVx604n4p%2BQ9SKeyKkPkVITdVh7UeszZoZJSPU8wRMigTGLEGNpt2f%2FExkUvs%2BcdW%2FYLP0Y5cNiFUkX2kYp1s%2BreBLqsD%2BO%2B6QnZIAOb3KVQ1IIRIsI9eKZNAVgZaQC%2B%2BjkCbEKcJy9u0SaTz1UwH7JAif%2BwvkS%2FiAwyExkzd7732boEXBgzCkOefaQeQzq9mDJkrF0KzE4dsw7PeAxQY6pgGwQJmjoOii1vWQZPYK8hb2ZTL8vI3q1LESTmGysO2AHGxvKdqE7ggHaQDY9pLC6Oaer%2B%2BjZoJ1zH5DfjV4y89Tyi1kHLhQqdNQlF8HgX%2BBcFRoARa8aTxUGNKBMR9mxLfj7YHf5O04VtYj%2BmXRwgMiccW0eCkyPaPMOqW2qODOOBGRKKl08%2FxFFeDik8DpYxiuOUeJuW9Ajy96AMhUUhsiF7LpzdNk&X-Amz-Signature=2fd6dfacc7908b7f29c0d920fbb8b3bfe288e7058b8323098a9cc8fd457be00a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVA7YC4P%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIFJjz4G0311xY49LStQ0H%2Ff7oyp4jVKepC9sgb9H%2BEswAiBwrQOa98EnypGe72EdqtwvsPahMD7OqiZ%2BLDCr5TYRSSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMVHge1laFOFEhj%2B%2F9KtwDngXoWXI6U7o7VdXSVzJDLouaqPvZ9VkqDgqQeMANdqfZUPVnBFd24VB3GgSOk1UArEr5NvKy3m5LeTC4NCY8VXyBsMY%2BL8w%2FEiC27eiPc1bDkNJdGVI%2F7Wusm9uiSJqepr2XgDgqbVX9f3AM%2BC%2FTaBrFET1it%2FTQJSdi0zx37S3BjCRUakqECZcmn%2Fceqww1bBUJyuUraQQZMtQ%2Bwmqw47VW9Dx5lgInQmuYqD5pLtWG7FZb%2Fa5Ft6%2BAepY7PzCgfvdNxEReJOW3Bf95kDZggvlpR6EqK9GzEOMxk%2FRymyHH7Yiqw8TwsF3X49nMaS0FokseFoRf37QtV3dflefJqrvDJg6T2Tn3YXUcp6r6ynzRs7LTj8y5%2FB2YFdJ33sMteEapWebyPKGeZ2kjowi3Ega5cc3TfZUpd4x1kXDdDfue%2BAlVx604n4p%2BQ9SKeyKkPkVITdVh7UeszZoZJSPU8wRMigTGLEGNpt2f%2FExkUvs%2BcdW%2FYLP0Y5cNiFUkX2kYp1s%2BreBLqsD%2BO%2B6QnZIAOb3KVQ1IIRIsI9eKZNAVgZaQC%2B%2BjkCbEKcJy9u0SaTz1UwH7JAif%2BwvkS%2FiAwyExkzd7732boEXBgzCkOefaQeQzq9mDJkrF0KzE4dsw7PeAxQY6pgGwQJmjoOii1vWQZPYK8hb2ZTL8vI3q1LESTmGysO2AHGxvKdqE7ggHaQDY9pLC6Oaer%2B%2BjZoJ1zH5DfjV4y89Tyi1kHLhQqdNQlF8HgX%2BBcFRoARa8aTxUGNKBMR9mxLfj7YHf5O04VtYj%2BmXRwgMiccW0eCkyPaPMOqW2qODOOBGRKKl08%2FxFFeDik8DpYxiuOUeJuW9Ajy96AMhUUhsiF7LpzdNk&X-Amz-Signature=335a33dff9c3ca85d77d92aec2c0bae50bcfadbf28e7f60f3b173d2dad4398dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
