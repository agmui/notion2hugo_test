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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DUA4VU5%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE11RgeeohaqKI5%2BR7%2B%2FBxlnRHsjarkf1r%2FMy5Evm1lfAiBiUFWQUm35MilJOFphQDYaORTRBpGdxCCPrCl%2FvFGVqir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMXmUZXFyk7SkkFfcBKtwDE2D5DmjmTkvvKJiYNyHCLLFIcOTIcig89bB3WedezR3dS%2Bq11XSgk%2BKvlQFv4G1Xzb%2Bl5rGek0jqCG0PwKmDKaiVzSY1KezP7jCNx5YfHM%2FuTe61Z2c5JBTXAZmEXDRkNYUuH97DvDNHn5wYcwcFgSFQtwFMiaBMIwJVBNPHUHifIrA4dtymKG9fENyIqMqwtL9dL70%2BCX9oannewaBhXprrZIRCMsSq56%2FrBUbIZ0MULUZQos7LlK0O6TNKUzg5aIDyPNk1hjchWmVLzdtcKh4YOPySzhATWLpf2lCefLjWeYTnUFYvDIPItaYm8wC7IPP%2F94xpkc88HkZvgU9rXiZkpujg3ZJqwnZ%2FYcX52ef2LfeskZF0NxaEVkqkxJreur9XH1pMvqZ72oDKNHZ%2Fsr1wKkHE7xxXt80O8AwRjliMhGukiHu2OVNRqrDKueqqpTUcHGWN%2B4aBpHDObpJbKkbofG3aq6zFluLiGyuFRIesdhZ90T80CNmlvcBstpQGR%2B79VsozL3LaNI7uRKrBHQ9Tp6M%2FHfbT2R7ys6R8aFdtBsXZO%2BH153Jhs64gct%2FZak6Lgf%2BIOCj97joc99KO0Du3EPt0wqjrJW45frVEuSrU%2Bqv3g%2FdU4fByvoUwoYeGwAY6pgGeodreOhN5DJJY1qwr5Un0FqZktkZGeDG2aAhGuyyjABGPg7OR%2BGRCQbgkw21%2F1%2BnxwJFyksBxuPNpag93BFeqTKu0hiTG1VFsfk1bpi2vZmTMAU%2FnYVw2xrJmp%2F4V%2FMx0oxzLcaVNO0H1Vx2MGZBM0bw%2BkOU%2FRh8Q1eeVAOG6s1Chp%2FTs9r18WRm8A7e%2BoLxHka%2FRmrdLVuippzNVZz5AI8IUKn2i&X-Amz-Signature=25c6b9b93c19c9e8a97136c43aa57d2de5f37c6cdbaff2f05b9f8f463ceea743&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DUA4VU5%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE11RgeeohaqKI5%2BR7%2B%2FBxlnRHsjarkf1r%2FMy5Evm1lfAiBiUFWQUm35MilJOFphQDYaORTRBpGdxCCPrCl%2FvFGVqir%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMXmUZXFyk7SkkFfcBKtwDE2D5DmjmTkvvKJiYNyHCLLFIcOTIcig89bB3WedezR3dS%2Bq11XSgk%2BKvlQFv4G1Xzb%2Bl5rGek0jqCG0PwKmDKaiVzSY1KezP7jCNx5YfHM%2FuTe61Z2c5JBTXAZmEXDRkNYUuH97DvDNHn5wYcwcFgSFQtwFMiaBMIwJVBNPHUHifIrA4dtymKG9fENyIqMqwtL9dL70%2BCX9oannewaBhXprrZIRCMsSq56%2FrBUbIZ0MULUZQos7LlK0O6TNKUzg5aIDyPNk1hjchWmVLzdtcKh4YOPySzhATWLpf2lCefLjWeYTnUFYvDIPItaYm8wC7IPP%2F94xpkc88HkZvgU9rXiZkpujg3ZJqwnZ%2FYcX52ef2LfeskZF0NxaEVkqkxJreur9XH1pMvqZ72oDKNHZ%2Fsr1wKkHE7xxXt80O8AwRjliMhGukiHu2OVNRqrDKueqqpTUcHGWN%2B4aBpHDObpJbKkbofG3aq6zFluLiGyuFRIesdhZ90T80CNmlvcBstpQGR%2B79VsozL3LaNI7uRKrBHQ9Tp6M%2FHfbT2R7ys6R8aFdtBsXZO%2BH153Jhs64gct%2FZak6Lgf%2BIOCj97joc99KO0Du3EPt0wqjrJW45frVEuSrU%2Bqv3g%2FdU4fByvoUwoYeGwAY6pgGeodreOhN5DJJY1qwr5Un0FqZktkZGeDG2aAhGuyyjABGPg7OR%2BGRCQbgkw21%2F1%2BnxwJFyksBxuPNpag93BFeqTKu0hiTG1VFsfk1bpi2vZmTMAU%2FnYVw2xrJmp%2F4V%2FMx0oxzLcaVNO0H1Vx2MGZBM0bw%2BkOU%2FRh8Q1eeVAOG6s1Chp%2FTs9r18WRm8A7e%2BoLxHka%2FRmrdLVuippzNVZz5AI8IUKn2i&X-Amz-Signature=cc1143bc745b6321d6fa9e64890643f6e07edbda32a3b80048cde1d2609683ae&X-Amz-SignedHeaders=host&x-id=GetObject)

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
