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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T4AWZ6D%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCscV3EQ1na6dULJ9iKzsVI%2B9C%2BMcrL8d1UbH4e8t5lsQIgUNRMJ1iSHZHdqcj7oprkKPjBmzMJuB6EHqjtzouqDtoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDG8FR%2BjbMYvZpZcQAyrcA8BZQIkAM8A2hIkCtdVAh5z0fU%2BaRDH7AXRMT46uJ0CG8e48TxjjKSt2a%2FZN559vUlyvixv7YoztKEfbmC3fZcXyTr7amfBCXiGXBUPc%2B%2FJ3PFuhtodeJgmynBPT1jM40LRYaIUvZ2K63rmxDJjPT1vYT5QOEtzJLuQPZbC92LWStRewXSDc%2FfMM8Lb%2BnPOXGyIKs8Rt5jeET%2BbZxwqOG8R5njOMKaAotf7wagX%2F%2BdkkVHfqFMixeHQ64ODoOuaOl0ZAyhZRhJBAmE%2BfU5%2B%2BYlZ358vuSsdMx8VGhtvJSlkXT6rtCoonJ0E7dJQhk1n5d4Yzlejf%2B17MfJY%2BC%2FQzYFO2obRbEjOTIe6%2Fh%2Fi9GjlCnoqd5NMJLZXNCkaGYdNzYYEtHne2HnEjxwUpEy3eaVf9f6rgRQ8KoBeU5qD2ZC8GADE9ru7YGhLj6i7Y5sKOBbRYZSxUfLhhNqn8olNaocy4hvcuipL9uDBohxD1ypIsUFc0CAXLXHKyINRrVFR8gPOzgHvUnP3QihyiJ29R1sJg%2F5dewdPoNtMTlYeLhE5CKZ1oUequkuZu0URSasm4iyADx0hc8ASQzmDwmieodHKgIl8iO%2BhtWga6jvuINn06qIZZ%2F0SH4uAupo52MPKcu8QGOqUBDO7%2BaULaIi%2BTNpPKGfbi1GofenvCJKtuXrzIcb5ldqQXGDAl1dSpEkzMCqi%2Feo62r3TiWk8KDNRDS1GMy4jgB20%2FTEieRCcjfqX133JTJ9b9CC4JF4c88L7AUFsHpz0hC5ksYHzwbjeYKhrou06JyjKmRbPZdmSl%2B71J8Ci0X8m4O5TWD%2FX6YODZ%2FcBAeJfcVZpw8feWpi%2F%2BMg0KorJQrj5zleJU&X-Amz-Signature=fcec29b863dac6306d8b9c73c2ed0898905b8431d7b08380b4f722770781a033&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T4AWZ6D%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCscV3EQ1na6dULJ9iKzsVI%2B9C%2BMcrL8d1UbH4e8t5lsQIgUNRMJ1iSHZHdqcj7oprkKPjBmzMJuB6EHqjtzouqDtoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDG8FR%2BjbMYvZpZcQAyrcA8BZQIkAM8A2hIkCtdVAh5z0fU%2BaRDH7AXRMT46uJ0CG8e48TxjjKSt2a%2FZN559vUlyvixv7YoztKEfbmC3fZcXyTr7amfBCXiGXBUPc%2B%2FJ3PFuhtodeJgmynBPT1jM40LRYaIUvZ2K63rmxDJjPT1vYT5QOEtzJLuQPZbC92LWStRewXSDc%2FfMM8Lb%2BnPOXGyIKs8Rt5jeET%2BbZxwqOG8R5njOMKaAotf7wagX%2F%2BdkkVHfqFMixeHQ64ODoOuaOl0ZAyhZRhJBAmE%2BfU5%2B%2BYlZ358vuSsdMx8VGhtvJSlkXT6rtCoonJ0E7dJQhk1n5d4Yzlejf%2B17MfJY%2BC%2FQzYFO2obRbEjOTIe6%2Fh%2Fi9GjlCnoqd5NMJLZXNCkaGYdNzYYEtHne2HnEjxwUpEy3eaVf9f6rgRQ8KoBeU5qD2ZC8GADE9ru7YGhLj6i7Y5sKOBbRYZSxUfLhhNqn8olNaocy4hvcuipL9uDBohxD1ypIsUFc0CAXLXHKyINRrVFR8gPOzgHvUnP3QihyiJ29R1sJg%2F5dewdPoNtMTlYeLhE5CKZ1oUequkuZu0URSasm4iyADx0hc8ASQzmDwmieodHKgIl8iO%2BhtWga6jvuINn06qIZZ%2F0SH4uAupo52MPKcu8QGOqUBDO7%2BaULaIi%2BTNpPKGfbi1GofenvCJKtuXrzIcb5ldqQXGDAl1dSpEkzMCqi%2Feo62r3TiWk8KDNRDS1GMy4jgB20%2FTEieRCcjfqX133JTJ9b9CC4JF4c88L7AUFsHpz0hC5ksYHzwbjeYKhrou06JyjKmRbPZdmSl%2B71J8Ci0X8m4O5TWD%2FX6YODZ%2FcBAeJfcVZpw8feWpi%2F%2BMg0KorJQrj5zleJU&X-Amz-Signature=3efbdeaeb0dc7aa6f8dbf4bcc7995a864f3a11253d07d94dd4fc64ac3674ef2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
