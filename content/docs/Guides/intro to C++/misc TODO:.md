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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPKV3LGE%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIFW6C2W0O7Pk%2FwiU7iHd%2BEcAMelH%2F6%2BUpWH%2BJIwdIAsPAiEAuOKlRDit95y7GLRIXfXGA%2BvGrP5%2BTRO1CnzpOD%2BXVKoq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDNkJgsQYtNF%2FaoNs4CrcA36bSowwerLVemu3%2Fc3SaTfYBAdNqocJpRUujmZvnJ8KytxLfysFM8%2FPDHNj%2B%2FXzlyiuaLmFHvGsMb6a%2BIzXHKQlhlwC3tST%2FYYvsZhYX%2BmE4WvVUA0PacLFvCgAUm%2BioLPD1Ay6HHWWE%2Fk2uH8knpB0Jo0K8GjLyh7M1Too%2BkK0xR7WWSNLQh8zUZ9Lst6MsV6xMNqCFnze3uQDMHPwd%2F%2FQZ%2FV7LbrC%2F%2F1zR59uL1OPAWQgkbvhKvmC%2FUSPXdaADPLhC3CgRSSlBbpZKeOQjj5Z3diLE7b%2FIt14OMrccC9eXbLcwscrO%2FHjvhyMECVqGHjWQsuZqp7Q5e1rCUZ2jwgctDsWphgqRz2CS2BSNvdxyMBpkaCeTGrv%2BXFqRD%2FRzt5%2B1X4JBZp3aAshHcet4je2BPy7xoHhZcOXh4oMM4QuL46NDuynAyDTFQMpqCQK78Lyw%2FGy2Yy1TNHTBPfF%2BJFMAJzsFWsbMbE3H99iZ%2FaZtL%2BzI5n9PFFOQiVlydkdcfqn9Uni8XDg1cfILrwCs2bniuSbTL%2BT90YrJ9h%2BAo4wtWAsqPCQyxs%2BxAXt8ur5sp3COBRiT%2B7TfbG2yqgK%2FCU3xHUxuJ2c9DEYDWlBgd1%2F0bix%2F%2FzQHTdH7QOHMMfqy70GOqUBEUNaubKiC7PPpYCK8Cu2iYNfZQCGkFMX6%2BERedzHnQKbJD5aFrG2G8uC5lDyK5WHdAyd94IRQ3zQwGfPxDupDnwoIirlqQeqkuI84iElI%2FAPkQkyaSO9alkBRhn%2F1cVsrggl8zctucudx%2BnCwkWublV%2FZdsacRu33zPQWBslp7va19eSDL%2ByCSdKdU9hja6%2FCqAe4ftl5C9n85Dd%2BiyCoU5RBa1c&X-Amz-Signature=effd62f5ab062d4161db4264fe372fff996cf395286a56109b409cf9ecee327a&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPKV3LGE%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIFW6C2W0O7Pk%2FwiU7iHd%2BEcAMelH%2F6%2BUpWH%2BJIwdIAsPAiEAuOKlRDit95y7GLRIXfXGA%2BvGrP5%2BTRO1CnzpOD%2BXVKoq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDNkJgsQYtNF%2FaoNs4CrcA36bSowwerLVemu3%2Fc3SaTfYBAdNqocJpRUujmZvnJ8KytxLfysFM8%2FPDHNj%2B%2FXzlyiuaLmFHvGsMb6a%2BIzXHKQlhlwC3tST%2FYYvsZhYX%2BmE4WvVUA0PacLFvCgAUm%2BioLPD1Ay6HHWWE%2Fk2uH8knpB0Jo0K8GjLyh7M1Too%2BkK0xR7WWSNLQh8zUZ9Lst6MsV6xMNqCFnze3uQDMHPwd%2F%2FQZ%2FV7LbrC%2F%2F1zR59uL1OPAWQgkbvhKvmC%2FUSPXdaADPLhC3CgRSSlBbpZKeOQjj5Z3diLE7b%2FIt14OMrccC9eXbLcwscrO%2FHjvhyMECVqGHjWQsuZqp7Q5e1rCUZ2jwgctDsWphgqRz2CS2BSNvdxyMBpkaCeTGrv%2BXFqRD%2FRzt5%2B1X4JBZp3aAshHcet4je2BPy7xoHhZcOXh4oMM4QuL46NDuynAyDTFQMpqCQK78Lyw%2FGy2Yy1TNHTBPfF%2BJFMAJzsFWsbMbE3H99iZ%2FaZtL%2BzI5n9PFFOQiVlydkdcfqn9Uni8XDg1cfILrwCs2bniuSbTL%2BT90YrJ9h%2BAo4wtWAsqPCQyxs%2BxAXt8ur5sp3COBRiT%2B7TfbG2yqgK%2FCU3xHUxuJ2c9DEYDWlBgd1%2F0bix%2F%2FzQHTdH7QOHMMfqy70GOqUBEUNaubKiC7PPpYCK8Cu2iYNfZQCGkFMX6%2BERedzHnQKbJD5aFrG2G8uC5lDyK5WHdAyd94IRQ3zQwGfPxDupDnwoIirlqQeqkuI84iElI%2FAPkQkyaSO9alkBRhn%2F1cVsrggl8zctucudx%2BnCwkWublV%2FZdsacRu33zPQWBslp7va19eSDL%2ByCSdKdU9hja6%2FCqAe4ftl5C9n85Dd%2BiyCoU5RBa1c&X-Amz-Signature=67285a564eb9180b7b8c8da0ca5c7fd1cf403606f7209157654bec9e34fe3fdc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
