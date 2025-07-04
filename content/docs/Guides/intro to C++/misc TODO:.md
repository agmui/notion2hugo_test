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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXO6TUIF%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIDUBNzachoOhuLoL5emhqLf5XCV75cD7OFeSJxpIveufAiEAgFjF4%2F1s2yKuEMn2u2nwvhFhISRcoRqKHLVfdUnLTMoq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDNUatmsiFeVX6NSwJircAzpi4EMV6XQOel0pICe8sZaCEZdFIHarWO36VlgL9EmG7cInmilE3BHIB5eI9l2tg9XCEsZhOSqqzlLHr3R5TXfGMR1xw%2F0wOIvqid898VnejErdwpgq03b3%2B7tbI7J3%2FKWi14OfP%2FRHBThlswt8fTsjuJlneRB5qs0Axsvb0QjWOjB3CM547UwTlEgSko3FQyaJc0zhmcV6FsVnqNtiJDpKbMz1pUn8Cox3odN%2Frgpd0CR8OsT66Ieha8ukF61Oen6fbLeLW9jVyLyOrNqc1ta01fT86fy%2FeVB4pcky9rWOKE90WYbeapAt4S2xJ9AkhA7QAGM6Ok78DeNU3CMvPbl%2Fpr1yu4cD5%2FYcOw76GI0WbN9dAQKDqk8JlJ6X7Bu%2FZO3Odv7FTj%2BrIRJ%2FbUx4OtizgtGqNqsexAq3q7PBFFRT2s%2BIjYRyRRD9hbbt05EVFWFwqrV84Mg2decwozbNhGusM1H1iLHPqIfQXVkJct3NpuyLUiofdO6JUCg%2FYRvQntOUQoycz7BMqrvo%2BXKXqImzkVDyUqazQ4P03DFAOmqKu2mR2NH5XF5KXqUQAoOJ3IO6qqgXIhxVuC%2FhSUfVINYDLKy6f6rKzPWAX308a0MRjLnZm%2F4yvJXjsJ89MJnooMMGOqUBpaDr1QLPjiC60wawngspdthJwYtuQDxvh84v0s3zgjuThyeiiyA4r2tSMuiJbdu9DqwT%2Bzl%2FpFRbU4QzAO4MowNn7aiW0Z2aaY0aq34xRedWgYCakkRV21d6lfrdaJlppVxUcFL5wJuebafOt16kmEtTONKEUFt8UsrUN%2BePV855ABJAf7F%2BI6Uaf4mORt8GsC55ZrkDr1vpIMNL19B0s5Zggca5&X-Amz-Signature=a6eb3072aa42c2f67307d02812f2300b1c845fda9b3d7a48aaeba0ba176f4013&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXO6TUIF%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIDUBNzachoOhuLoL5emhqLf5XCV75cD7OFeSJxpIveufAiEAgFjF4%2F1s2yKuEMn2u2nwvhFhISRcoRqKHLVfdUnLTMoq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDNUatmsiFeVX6NSwJircAzpi4EMV6XQOel0pICe8sZaCEZdFIHarWO36VlgL9EmG7cInmilE3BHIB5eI9l2tg9XCEsZhOSqqzlLHr3R5TXfGMR1xw%2F0wOIvqid898VnejErdwpgq03b3%2B7tbI7J3%2FKWi14OfP%2FRHBThlswt8fTsjuJlneRB5qs0Axsvb0QjWOjB3CM547UwTlEgSko3FQyaJc0zhmcV6FsVnqNtiJDpKbMz1pUn8Cox3odN%2Frgpd0CR8OsT66Ieha8ukF61Oen6fbLeLW9jVyLyOrNqc1ta01fT86fy%2FeVB4pcky9rWOKE90WYbeapAt4S2xJ9AkhA7QAGM6Ok78DeNU3CMvPbl%2Fpr1yu4cD5%2FYcOw76GI0WbN9dAQKDqk8JlJ6X7Bu%2FZO3Odv7FTj%2BrIRJ%2FbUx4OtizgtGqNqsexAq3q7PBFFRT2s%2BIjYRyRRD9hbbt05EVFWFwqrV84Mg2decwozbNhGusM1H1iLHPqIfQXVkJct3NpuyLUiofdO6JUCg%2FYRvQntOUQoycz7BMqrvo%2BXKXqImzkVDyUqazQ4P03DFAOmqKu2mR2NH5XF5KXqUQAoOJ3IO6qqgXIhxVuC%2FhSUfVINYDLKy6f6rKzPWAX308a0MRjLnZm%2F4yvJXjsJ89MJnooMMGOqUBpaDr1QLPjiC60wawngspdthJwYtuQDxvh84v0s3zgjuThyeiiyA4r2tSMuiJbdu9DqwT%2Bzl%2FpFRbU4QzAO4MowNn7aiW0Z2aaY0aq34xRedWgYCakkRV21d6lfrdaJlppVxUcFL5wJuebafOt16kmEtTONKEUFt8UsrUN%2BePV855ABJAf7F%2BI6Uaf4mORt8GsC55ZrkDr1vpIMNL19B0s5Zggca5&X-Amz-Signature=69bdaba3f1160043378b632f60008b575d92a2a89a7217b7cbcacc058e3abe92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
