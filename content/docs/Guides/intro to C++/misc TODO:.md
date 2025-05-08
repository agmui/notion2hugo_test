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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KC5I3OL%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T190657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnYdMo92%2B%2BPE3eUjuIigfJnl3JN24pXnpw374KN9tB5QIhAK4Om4k1Wzvr8LTlph3rHvRK26FYUaIUZee%2F%2FFQ2KACxKv8DCHwQABoMNjM3NDIzMTgzODA1IgwKgr39oDvsCpUR1VIq3AN9P1GdxE4zo6Jfx5UZ0Gvgxfq3Y4d%2BtslWg%2BOVxghj2tet6sSsccRhu5MnnrnDGwm99fZ59%2BirNKniu8j9sRFUQ2qKGeywwJ0ppiq6ki%2FW%2BbLetI7%2BiWfGugYo6NbzXuJUvmfyKzRX8CV%2F5JMLOWCsAqqYMoxogy6Nl1sKuKXRFFkJcAbCcVJQrsGCXcx%2BLmik5dtyvOP9x%2F86sK%2BELCoCe9iD5rKaFhuQJTGY6pb6ls4dhBJ3B%2BIH0%2Fv9xumL4jet4jn8M9qCy2bUaBAAgb%2B%2BQBTffsBTD2BI4GUPNsJobGsxyVJF%2B9E8%2BYB5gZnbEHQ%2BfZEqx0qe2MccBudVZDlaEvlSeiRfz8C1dSf5uLeTiNBzpU6tXrHUCyVjQCX4MTEPhv3nIRMeCBEFU3yPxBYCL7c6C8h4svPi779PkKGWJ3EFu%2Be9LBAFswjWWYf44Lvc9bMqFKssx%2FUY8eYG8ImfaMdUMNiHbkfSkEd8D%2BPLSvDOxbfPSmUoEsT%2B%2FpWJ5Un09FY4FCUD3%2BzslP6WpRhXJCVD%2BURVSuUyCfVUVTduXUyqSPpA9PBRA%2FJQHHKrlNGUoDqd%2BM6NjtSBA9%2B02lDKy6cxa5l%2FGHhOVV9QPheySWk0x2bB1iZZpLeODDDj%2F%2FPABjqkAQOrKkpsD3%2B7%2FWDyyFKVuGP%2FYlD%2FF7zlXOGA3JSdS7nCJ%2BazZXT25WKqTlIav1FpVn9cJWrSjsVcSPPhHOeQTHMfl3wYzYfuReCkeQTzdiRaQsqsNgjSo5gmwjiPnJJxCB7KJVRaUm5uEKKraLT6m%2B2w483aIlW8ZazoKtBcerGo2hrxSzUmysIdR3KipqEYmduOvQJuFbXAwx7xqV5Of7yso7h2&X-Amz-Signature=9492dcf096357d3ed5addd8088a996156929102c479660c66466ea97ddd0faf2&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KC5I3OL%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T190657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnYdMo92%2B%2BPE3eUjuIigfJnl3JN24pXnpw374KN9tB5QIhAK4Om4k1Wzvr8LTlph3rHvRK26FYUaIUZee%2F%2FFQ2KACxKv8DCHwQABoMNjM3NDIzMTgzODA1IgwKgr39oDvsCpUR1VIq3AN9P1GdxE4zo6Jfx5UZ0Gvgxfq3Y4d%2BtslWg%2BOVxghj2tet6sSsccRhu5MnnrnDGwm99fZ59%2BirNKniu8j9sRFUQ2qKGeywwJ0ppiq6ki%2FW%2BbLetI7%2BiWfGugYo6NbzXuJUvmfyKzRX8CV%2F5JMLOWCsAqqYMoxogy6Nl1sKuKXRFFkJcAbCcVJQrsGCXcx%2BLmik5dtyvOP9x%2F86sK%2BELCoCe9iD5rKaFhuQJTGY6pb6ls4dhBJ3B%2BIH0%2Fv9xumL4jet4jn8M9qCy2bUaBAAgb%2B%2BQBTffsBTD2BI4GUPNsJobGsxyVJF%2B9E8%2BYB5gZnbEHQ%2BfZEqx0qe2MccBudVZDlaEvlSeiRfz8C1dSf5uLeTiNBzpU6tXrHUCyVjQCX4MTEPhv3nIRMeCBEFU3yPxBYCL7c6C8h4svPi779PkKGWJ3EFu%2Be9LBAFswjWWYf44Lvc9bMqFKssx%2FUY8eYG8ImfaMdUMNiHbkfSkEd8D%2BPLSvDOxbfPSmUoEsT%2B%2FpWJ5Un09FY4FCUD3%2BzslP6WpRhXJCVD%2BURVSuUyCfVUVTduXUyqSPpA9PBRA%2FJQHHKrlNGUoDqd%2BM6NjtSBA9%2B02lDKy6cxa5l%2FGHhOVV9QPheySWk0x2bB1iZZpLeODDDj%2F%2FPABjqkAQOrKkpsD3%2B7%2FWDyyFKVuGP%2FYlD%2FF7zlXOGA3JSdS7nCJ%2BazZXT25WKqTlIav1FpVn9cJWrSjsVcSPPhHOeQTHMfl3wYzYfuReCkeQTzdiRaQsqsNgjSo5gmwjiPnJJxCB7KJVRaUm5uEKKraLT6m%2B2w483aIlW8ZazoKtBcerGo2hrxSzUmysIdR3KipqEYmduOvQJuFbXAwx7xqV5Of7yso7h2&X-Amz-Signature=f7ec3bc713d8a8f44738dd3abb33c005128a45e6b2df1ecbe69051bac44a97ae&X-Amz-SignedHeaders=host&x-id=GetObject)

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
