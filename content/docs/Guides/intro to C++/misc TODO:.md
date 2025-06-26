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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W5EZLJU%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCSrUh8DifbzdlLIVXYFcsUvLrkdiEoP8MVSwvLjORO8gIhAIhzL8RkmdTRRJXkIub66ToRiJlDguGdix7E5%2FH58qfjKv8DCGgQABoMNjM3NDIzMTgzODA1IgwTa%2FDewbcWx4Yn21Eq3AOYdpASP%2BE3%2FZY8c4kYM29bdcn0Pd%2FfWJ2Gn%2F63HgC8Q4YKXR31cAYRgZ2Qj3A58okxpRCp9810zJhsyD1R7kXoq4XDWfM%2FiFNUYXbf8a8DY3OIgoakA5ir%2BI%2Bg8uGWj2KqJW8SHjtSUCEW%2BpGKfGOW45cAJiTxcxyNj2bUSQdI8Ie6c1AGgBqKPbAsTt1EKz75uVB1e8E%2FOmeckt3GAd1qFJCiAKgT2u3rz2Cqd%2BwHWN5EoZGnv0cr5cbmUNfFHkosTsh061YVMwezosPCeXigz8YcPs1m%2FH%2BSCL%2BxPomFiGdsLL8my5lWmKIRR3uZgIs1YYIr0T9xahOvfcJXenAZQxrwhBAZwWvw%2BuuVNB64WTPs8gZjsDMb0KMO14UZG2FFGF1yJpaZka2YD01JM7dx692siVNsqcP6ZKBnqLhEbkwNmSATIpi0BZG74VFtyZkUaea7Od28FOLrsIee2h2564c6TcsLaWUnpMT4ldcSMJ6fI2aWXfTa9mu%2FpzUm0ctU%2FQBn%2BPrdWgQ8L%2Fp%2FZERAkqBXFVppN1OyoQHD0zrkcnYxjIXH6rGBh0R%2FeOyFo%2FBKKW0czXdd%2B0blW5b8fnyl8XO9KKWG%2FvNYyNzdMaj2q%2Fboh1%2BddM9qJ2czpzCsoffCBjqkAd9wb69mGr3ovqT3n%2BCnyh4sLahiIMRsypcgvNA5s%2BdLA9hPJAa3cCNA%2BPxGDt4K8VF1QTL19SzTHwDKrj5N0XQcGFYSEphi9MAXizp5it4okE7wkCvGbiIVxyBAVpK8xp3%2BUEoTHQVpYnAqAGOLzj7PaB170T5k2SfIbTgMuIyZKVyPBjzMU69Q9KMhGydCiYrC5OFqhjUqtzf%2Bf1xMvrXcu8QJ&X-Amz-Signature=d111ebd3a2bc4b118eabfda2479095901d7cb9d6b8edb4e111db1a4be220ea42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W5EZLJU%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T230844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCSrUh8DifbzdlLIVXYFcsUvLrkdiEoP8MVSwvLjORO8gIhAIhzL8RkmdTRRJXkIub66ToRiJlDguGdix7E5%2FH58qfjKv8DCGgQABoMNjM3NDIzMTgzODA1IgwTa%2FDewbcWx4Yn21Eq3AOYdpASP%2BE3%2FZY8c4kYM29bdcn0Pd%2FfWJ2Gn%2F63HgC8Q4YKXR31cAYRgZ2Qj3A58okxpRCp9810zJhsyD1R7kXoq4XDWfM%2FiFNUYXbf8a8DY3OIgoakA5ir%2BI%2Bg8uGWj2KqJW8SHjtSUCEW%2BpGKfGOW45cAJiTxcxyNj2bUSQdI8Ie6c1AGgBqKPbAsTt1EKz75uVB1e8E%2FOmeckt3GAd1qFJCiAKgT2u3rz2Cqd%2BwHWN5EoZGnv0cr5cbmUNfFHkosTsh061YVMwezosPCeXigz8YcPs1m%2FH%2BSCL%2BxPomFiGdsLL8my5lWmKIRR3uZgIs1YYIr0T9xahOvfcJXenAZQxrwhBAZwWvw%2BuuVNB64WTPs8gZjsDMb0KMO14UZG2FFGF1yJpaZka2YD01JM7dx692siVNsqcP6ZKBnqLhEbkwNmSATIpi0BZG74VFtyZkUaea7Od28FOLrsIee2h2564c6TcsLaWUnpMT4ldcSMJ6fI2aWXfTa9mu%2FpzUm0ctU%2FQBn%2BPrdWgQ8L%2Fp%2FZERAkqBXFVppN1OyoQHD0zrkcnYxjIXH6rGBh0R%2FeOyFo%2FBKKW0czXdd%2B0blW5b8fnyl8XO9KKWG%2FvNYyNzdMaj2q%2Fboh1%2BddM9qJ2czpzCsoffCBjqkAd9wb69mGr3ovqT3n%2BCnyh4sLahiIMRsypcgvNA5s%2BdLA9hPJAa3cCNA%2BPxGDt4K8VF1QTL19SzTHwDKrj5N0XQcGFYSEphi9MAXizp5it4okE7wkCvGbiIVxyBAVpK8xp3%2BUEoTHQVpYnAqAGOLzj7PaB170T5k2SfIbTgMuIyZKVyPBjzMU69Q9KMhGydCiYrC5OFqhjUqtzf%2Bf1xMvrXcu8QJ&X-Amz-Signature=16ebe5172078af379b574740914428b49fd3c8b4b275278c5e3837bf47369990&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
