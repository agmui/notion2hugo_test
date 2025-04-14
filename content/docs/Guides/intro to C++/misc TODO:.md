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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRH4E6S4%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T091000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEThYSCuq9xovShrr5nx7ns9dtnBXvDOjHhxQXSzkJENAiEArSXeJu6kKO%2Fig0emgtYxhnAd1jYNxCOXL3MXzyp7QCAq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPjTOSvo%2FNPkJCtNuSrcA3HVWzAY5u42sT3%2BAP%2BWjmZRUAwLMlavXqtMxmW9cpi%2FhHUSCEsOBdv3qqvJm%2FAMHGK%2FXlL1U1LYH9EAf5HBSEnI547objYbzCIUYTas%2FZiJsY6u7skyV0JNB04eaWlaQz5Oq9GufKay5%2Bev%2BFXXxZQ%2Bsh3LYP6IY%2Fo6sU9fweDYC0tLmDKqPhUlwLiV9pJw%2Fi0ORZEorT0ypACoXYyKAiGZVhsjVTufEuNFdfi%2FY3RAG1b20pUj6Jfs%2Fyvnc1QLCE8VNzJTVoiJCuDQYpxNe6LtUZwRk%2F6NrGZmZgJ%2BLjWrarcJzN10Cs%2BLSVbq%2FkXnzHn5Wl2YLW7SE3ExpyNqyNpCPbebniLrGr4aCzjH%2B7NJ9GTtX3N%2FWyBuW3fuRKZEUAUENghW6ED5x0HLJuuyZ0utoHinnjS5g85pQSPS29qWM%2FOp79Zk5SoQA5s0qB1KytdO6RtmOBjrFsFHLIqYVkYwFe22D0l7XU0WmyQXR4Ia5GSk%2FwJTU5XZLvdJiVr8k89Jneyf%2FICq6gm4Uw4sOn%2FjXN5%2Fz3k4ebS4N%2BdtFsdlINSUMKpVMhvdxtXQBMbbsN7JAUYm1L3zG14HyYqd430TJ0FegEwGI1%2FChKL7w9MiA6QLTmsaFQMwtBX4MPTi8r8GOqUBLNmbISt%2BkDPVntQz1OEAcnXr4JSKITmrlS9VOPeVGnYp91iHOfhwBpDmMko0rdhNgLmPUUJRYjXTzEmL8bZXT2cZpxQEeQbi5QMQO4SQ53shkb83DoLsoz%2BE3s4dbaiJVNA2q%2BOVXfyEGT7FANgs11Q%2F%2FQ8hKLIV7QNx7Twfob1d4Y8g%2FvOD88gfrNrVj%2FTT5rpf%2Fm6eQgzhb7BHculwQg%2F4%2B3SN&X-Amz-Signature=65c8628be65bbe33a67c6da911bcc37116157ef02d14ae5ed8112590c7e47ec5&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRH4E6S4%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T091000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEThYSCuq9xovShrr5nx7ns9dtnBXvDOjHhxQXSzkJENAiEArSXeJu6kKO%2Fig0emgtYxhnAd1jYNxCOXL3MXzyp7QCAq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDPjTOSvo%2FNPkJCtNuSrcA3HVWzAY5u42sT3%2BAP%2BWjmZRUAwLMlavXqtMxmW9cpi%2FhHUSCEsOBdv3qqvJm%2FAMHGK%2FXlL1U1LYH9EAf5HBSEnI547objYbzCIUYTas%2FZiJsY6u7skyV0JNB04eaWlaQz5Oq9GufKay5%2Bev%2BFXXxZQ%2Bsh3LYP6IY%2Fo6sU9fweDYC0tLmDKqPhUlwLiV9pJw%2Fi0ORZEorT0ypACoXYyKAiGZVhsjVTufEuNFdfi%2FY3RAG1b20pUj6Jfs%2Fyvnc1QLCE8VNzJTVoiJCuDQYpxNe6LtUZwRk%2F6NrGZmZgJ%2BLjWrarcJzN10Cs%2BLSVbq%2FkXnzHn5Wl2YLW7SE3ExpyNqyNpCPbebniLrGr4aCzjH%2B7NJ9GTtX3N%2FWyBuW3fuRKZEUAUENghW6ED5x0HLJuuyZ0utoHinnjS5g85pQSPS29qWM%2FOp79Zk5SoQA5s0qB1KytdO6RtmOBjrFsFHLIqYVkYwFe22D0l7XU0WmyQXR4Ia5GSk%2FwJTU5XZLvdJiVr8k89Jneyf%2FICq6gm4Uw4sOn%2FjXN5%2Fz3k4ebS4N%2BdtFsdlINSUMKpVMhvdxtXQBMbbsN7JAUYm1L3zG14HyYqd430TJ0FegEwGI1%2FChKL7w9MiA6QLTmsaFQMwtBX4MPTi8r8GOqUBLNmbISt%2BkDPVntQz1OEAcnXr4JSKITmrlS9VOPeVGnYp91iHOfhwBpDmMko0rdhNgLmPUUJRYjXTzEmL8bZXT2cZpxQEeQbi5QMQO4SQ53shkb83DoLsoz%2BE3s4dbaiJVNA2q%2BOVXfyEGT7FANgs11Q%2F%2FQ8hKLIV7QNx7Twfob1d4Y8g%2FvOD88gfrNrVj%2FTT5rpf%2Fm6eQgzhb7BHculwQg%2F4%2B3SN&X-Amz-Signature=29399b7bccb950326814193320e7feb57a554a13172c4acd047a822fec0b0659&X-Amz-SignedHeaders=host&x-id=GetObject)

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
