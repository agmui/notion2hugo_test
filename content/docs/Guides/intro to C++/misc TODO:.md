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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5N6OBKQ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T024050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIGVnQVB8RJAxCoZaewKHCKu%2F7LZHGxsqHBCziaRw%2BI3RAiBIKplSW4X%2B%2FPXJTlf9Y00KoO1xxAO0GBFQXfDuIvoeCyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMh8YzYOBnFY%2BdlpvFKtwDJKqiKAICb8n%2B%2BaKF19No5bSAOGML4q2mk5IUi2e8PN7iqZOTHhY0L9L%2BblQhUrQVEX6EpmL5%2B8VI3ZQ90IbjlZmad5Z0c794essUj7rB%2BuTX9xlI4Vmiu1l61RGljeQ268QULl8rR1FIaLbxzUIdkf8qjT9BTT4Is8A2w1DLrIdvZGuWzVMVaFjLv1cNEkAXNvlZXTe98Q%2BbXURQdbjUTsYKyrbZYpNglGp%2FmT575%2FxiFYQ%2FNuSbnGIBwPT0Dt7iT3Fa43YumH3wFc0QmLo5AzAmwmxI8UHh44MFziNK9LeTjfXT1m7rgGAvTNDGZq96Rck%2FVtQUsiIie3BWaor8yF6tmpNxDGi9DKI3Ao78VBrcv9iCFOn0pfjyHInI6kRQYJwj%2FOzwM3HcPk%2BHowtPxSglP3NKt2t%2FEDr6sNwSSzCcBzQfPt2axbmvMA%2BhbVc%2FUfsckd5uMjRAXrIkhGkk29TDySv3IXBQi8GjsXsDJCyNi1X3lB6%2BIU2k16Zx%2Bwl7ktxGYL8RbPWw1DruN8Ev9oZofcAYyYsve6GCbMlVfvQYncTpYhKJPeaxKu%2FM9amYiQ03Q6nHRRalLKfMKD%2BWDxOTcUcNqHAPs3oyQ2tiSDagND7q0rSxbyQBz0gwkuScwwY6pgHC9VcXqxa2Ehs3qVMY5iatY%2FjJqjf2CoOWV0%2F8oCVQmWuZs%2BpcthtbPhL59lW85yEAkT7j%2FjOFVWiKGBk25XdChpuGF2N%2BQY7OYM7l31rsGoSHrtIP4F1UCS14z5JkGkdA%2Bgpe%2FK53GXMrqEOqr0ZxxpVaPi%2Bpvw4bOI8CEv5XQoQHjWn%2FnCdTPNbyJcTj%2FbB4QVv1CsAYmvBb%2BVmFRhKprnyHDMKN&X-Amz-Signature=651f341e0c2e96e82782fafb7e0812339bbb76f12f918b0afc78e009842178b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5N6OBKQ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T024050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJGMEQCIGVnQVB8RJAxCoZaewKHCKu%2F7LZHGxsqHBCziaRw%2BI3RAiBIKplSW4X%2B%2FPXJTlf9Y00KoO1xxAO0GBFQXfDuIvoeCyr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMh8YzYOBnFY%2BdlpvFKtwDJKqiKAICb8n%2B%2BaKF19No5bSAOGML4q2mk5IUi2e8PN7iqZOTHhY0L9L%2BblQhUrQVEX6EpmL5%2B8VI3ZQ90IbjlZmad5Z0c794essUj7rB%2BuTX9xlI4Vmiu1l61RGljeQ268QULl8rR1FIaLbxzUIdkf8qjT9BTT4Is8A2w1DLrIdvZGuWzVMVaFjLv1cNEkAXNvlZXTe98Q%2BbXURQdbjUTsYKyrbZYpNglGp%2FmT575%2FxiFYQ%2FNuSbnGIBwPT0Dt7iT3Fa43YumH3wFc0QmLo5AzAmwmxI8UHh44MFziNK9LeTjfXT1m7rgGAvTNDGZq96Rck%2FVtQUsiIie3BWaor8yF6tmpNxDGi9DKI3Ao78VBrcv9iCFOn0pfjyHInI6kRQYJwj%2FOzwM3HcPk%2BHowtPxSglP3NKt2t%2FEDr6sNwSSzCcBzQfPt2axbmvMA%2BhbVc%2FUfsckd5uMjRAXrIkhGkk29TDySv3IXBQi8GjsXsDJCyNi1X3lB6%2BIU2k16Zx%2Bwl7ktxGYL8RbPWw1DruN8Ev9oZofcAYyYsve6GCbMlVfvQYncTpYhKJPeaxKu%2FM9amYiQ03Q6nHRRalLKfMKD%2BWDxOTcUcNqHAPs3oyQ2tiSDagND7q0rSxbyQBz0gwkuScwwY6pgHC9VcXqxa2Ehs3qVMY5iatY%2FjJqjf2CoOWV0%2F8oCVQmWuZs%2BpcthtbPhL59lW85yEAkT7j%2FjOFVWiKGBk25XdChpuGF2N%2BQY7OYM7l31rsGoSHrtIP4F1UCS14z5JkGkdA%2Bgpe%2FK53GXMrqEOqr0ZxxpVaPi%2Bpvw4bOI8CEv5XQoQHjWn%2FnCdTPNbyJcTj%2FbB4QVv1CsAYmvBb%2BVmFRhKprnyHDMKN&X-Amz-Signature=fa9f3a213245447dcd4df821645be11535d80b9c9f535fcaacbcf3b25eea9b2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
