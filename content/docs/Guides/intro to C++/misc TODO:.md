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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT4ZE7UD%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T090358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9xP%2B9sOSNoNFG9YexjgQFhByCn2a%2BnI7N2v4lbf1%2FBAiEA10Wt2ES2qhb1pR3f1O5VfqRV8wGMd0zyQwxEyYTnsG8qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIwmy8AkA1p8F0k1jircAyOvc7ulktNK4Nx8OlP%2FO8Hlx9m7G5dLfyYm%2F5IpLK1G0hg5Z1dgicXcI7iEV6mofv%2FBwDAMuMoDTouBwCjVeVFFTsGW5sKxMe6raYSCVxmNhjv3jFfdk4MlQ%2FfOZpPfdrUEyUz4kN6TONeZgbBdj%2FC%2BA4FWvIBphx5SeQVtWgBVbIj8nlyzycUQZ48e3UIDCApJh0xRXp2xfRKOTQ%2B7wnXDe7Qhei9U6eVwunYlqcQWD%2BrLzhQ22xCkHAb3jBsTviu01IszMBxeHfAZGb6XjbHDTllT%2F19T3qOrqHRLgWK6boISTR4Dgiyf2AY3byMbeZ0gQiTrPhhVySyMeQdE1jZpkMEUC8x6CWmHHZJpnHOw3ZqZT5xgYjoMGvt%2FK1sSko12a2bb6XVSjv%2FaM3zj8E2%2BlH%2BNlWNSHNZn5ERuww2xQDaLm%2FX%2FxbmAhvdtyUZPpW7wsDTcxiIjC1Y6ID80ht2%2BXpaUMkhua5OM%2FQk6Qp5QVwj33AmqdqJx0n1Bmv4hLhTZQswYv3ARg9xKk5HoUdyvFK0eIvglkkrpIX2FlohdzuZ8sJ%2BvGW2Yi0dLdMJWJaEb0qqQ0JcJ5TsT5fcAToK1cqq5G3h3uhb8UY4AZI3yE0ub5mMvwb64C1USMJSm97wGOqUBb8SINiT6rlr%2Fe3RncRX2ofnh0XYxryDYF7VGsegL%2FSBFB2fEdXsZkIa%2BwdDtraeiAFjXeHjoXtJvzrnR06wCfdOZKuxEiWCBRMesBQwImkYbzXf4uftdRJBQIWz6hfwDrcJHgKzaywNo4RgHZsS8dhI2BlhN5zL6wLFYYuBc%2Fg6qR3HNVw63AZydjPmYWQ4xQ1SoS4G8xGCfcBl5lNNhuSgMIN6u&X-Amz-Signature=4d0c7c185c72066db2f7193e7343cb8d55eac8b5c9a75e1095063608dd91ef46&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YT4ZE7UD%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T090358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9xP%2B9sOSNoNFG9YexjgQFhByCn2a%2BnI7N2v4lbf1%2FBAiEA10Wt2ES2qhb1pR3f1O5VfqRV8wGMd0zyQwxEyYTnsG8qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIwmy8AkA1p8F0k1jircAyOvc7ulktNK4Nx8OlP%2FO8Hlx9m7G5dLfyYm%2F5IpLK1G0hg5Z1dgicXcI7iEV6mofv%2FBwDAMuMoDTouBwCjVeVFFTsGW5sKxMe6raYSCVxmNhjv3jFfdk4MlQ%2FfOZpPfdrUEyUz4kN6TONeZgbBdj%2FC%2BA4FWvIBphx5SeQVtWgBVbIj8nlyzycUQZ48e3UIDCApJh0xRXp2xfRKOTQ%2B7wnXDe7Qhei9U6eVwunYlqcQWD%2BrLzhQ22xCkHAb3jBsTviu01IszMBxeHfAZGb6XjbHDTllT%2F19T3qOrqHRLgWK6boISTR4Dgiyf2AY3byMbeZ0gQiTrPhhVySyMeQdE1jZpkMEUC8x6CWmHHZJpnHOw3ZqZT5xgYjoMGvt%2FK1sSko12a2bb6XVSjv%2FaM3zj8E2%2BlH%2BNlWNSHNZn5ERuww2xQDaLm%2FX%2FxbmAhvdtyUZPpW7wsDTcxiIjC1Y6ID80ht2%2BXpaUMkhua5OM%2FQk6Qp5QVwj33AmqdqJx0n1Bmv4hLhTZQswYv3ARg9xKk5HoUdyvFK0eIvglkkrpIX2FlohdzuZ8sJ%2BvGW2Yi0dLdMJWJaEb0qqQ0JcJ5TsT5fcAToK1cqq5G3h3uhb8UY4AZI3yE0ub5mMvwb64C1USMJSm97wGOqUBb8SINiT6rlr%2Fe3RncRX2ofnh0XYxryDYF7VGsegL%2FSBFB2fEdXsZkIa%2BwdDtraeiAFjXeHjoXtJvzrnR06wCfdOZKuxEiWCBRMesBQwImkYbzXf4uftdRJBQIWz6hfwDrcJHgKzaywNo4RgHZsS8dhI2BlhN5zL6wLFYYuBc%2Fg6qR3HNVw63AZydjPmYWQ4xQ1SoS4G8xGCfcBl5lNNhuSgMIN6u&X-Amz-Signature=674ea07003c5988d883142d5e50f69eee5c274d7d35730179759f02991fb1650&X-Amz-SignedHeaders=host&x-id=GetObject)

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
