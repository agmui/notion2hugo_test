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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS5MVUYB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK1RUhoix2tBqtyy4g9wi8z7qB%2Ftb792BXNSZCZhpowwIgGfXf9ejPVug%2FlNiy1PFofn4oL51oahPx%2FG7WexL9hGIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDFfqkDhjOqlqD3JzbCrcA5sHNcNMRirTmQZjWYPtW80NOQIbc64Xj6Ix%2BlLo%2FRWvLmnLGG0kpvQElpbOTcMP4lLY2IQzBDiiMVaLmUrcHKFVqtY%2F%2FMKj1u%2BbePRLJuKIK%2BM1HzLWfs9QcQmhhPGZlfgBeuSE3HG8fwjqOnoAuXTopc23lqKeWRnorUKQ2LRz5i9jldfHblrRJlX9qrtihyfAlLjSK4DoXQoR5rCZqN7IVKNd65o3n9UMdQtiHYWESThhf6GtAwY%2Ba4c%2F6PvLlaiq%2BMViQNfrsWBvEwlBblxP1J5MYtC35c0d035KqKpQffBe72q5lqrflzVLP4FMc%2FPBfNa7d3LUXboGfyo2ha%2BVAOmUz%2BZYKgRp2A%2FZUi6Eb%2BIvxnt5C36j3QXrc3e6OLze0cGZYc3gWEJg6U9%2FAbazs1Ja3lBL597rPmY8zuo5OaQftVV0jg0CpaN6q3bwdq%2BhWikCp80Bn9hrVjkZy4TtwKkZazIzxb8joHRl0Z9hnR%2F5TvGpld6DjzHa4Ip821xHOY6dHOjdZdU1jntz3%2FFylm0i2FgGATSPLSrQA1gKihd0FYRhGCLq5vNJQoE1Ijhvf0sHWv3WrhMCJH5KvWi9cCz%2BegfgN6iu1ebZmZ6OZugzlwZqC%2FD8cAvxMMaP9MQGOqUBD%2BIbZQPCfvoGSX3SHePrSb%2FnCpjSDNrGiktKB7odrLVU5a4FlIMm84xSX8%2FuYv3PPDr3eS5BUZN%2F92TIkm1MsynA0LWF%2B59ORdKX8he%2BxPCtMJ%2FoqjGfh53g5z4Vc94e8DryVvHpIMap35mpRLw%2FqFxdR40cm7%2BZq4JeiionWsWPT3ZiDMyP%2FOpiraSNwNxWikBbgGI4%2BQwkDrAzjtPScX53Grv3&X-Amz-Signature=a64515452aed67577d6871493766bf74bc7d763187270ebf4e0adfb9131e406d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS5MVUYB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK1RUhoix2tBqtyy4g9wi8z7qB%2Ftb792BXNSZCZhpowwIgGfXf9ejPVug%2FlNiy1PFofn4oL51oahPx%2FG7WexL9hGIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDFfqkDhjOqlqD3JzbCrcA5sHNcNMRirTmQZjWYPtW80NOQIbc64Xj6Ix%2BlLo%2FRWvLmnLGG0kpvQElpbOTcMP4lLY2IQzBDiiMVaLmUrcHKFVqtY%2F%2FMKj1u%2BbePRLJuKIK%2BM1HzLWfs9QcQmhhPGZlfgBeuSE3HG8fwjqOnoAuXTopc23lqKeWRnorUKQ2LRz5i9jldfHblrRJlX9qrtihyfAlLjSK4DoXQoR5rCZqN7IVKNd65o3n9UMdQtiHYWESThhf6GtAwY%2Ba4c%2F6PvLlaiq%2BMViQNfrsWBvEwlBblxP1J5MYtC35c0d035KqKpQffBe72q5lqrflzVLP4FMc%2FPBfNa7d3LUXboGfyo2ha%2BVAOmUz%2BZYKgRp2A%2FZUi6Eb%2BIvxnt5C36j3QXrc3e6OLze0cGZYc3gWEJg6U9%2FAbazs1Ja3lBL597rPmY8zuo5OaQftVV0jg0CpaN6q3bwdq%2BhWikCp80Bn9hrVjkZy4TtwKkZazIzxb8joHRl0Z9hnR%2F5TvGpld6DjzHa4Ip821xHOY6dHOjdZdU1jntz3%2FFylm0i2FgGATSPLSrQA1gKihd0FYRhGCLq5vNJQoE1Ijhvf0sHWv3WrhMCJH5KvWi9cCz%2BegfgN6iu1ebZmZ6OZugzlwZqC%2FD8cAvxMMaP9MQGOqUBD%2BIbZQPCfvoGSX3SHePrSb%2FnCpjSDNrGiktKB7odrLVU5a4FlIMm84xSX8%2FuYv3PPDr3eS5BUZN%2F92TIkm1MsynA0LWF%2B59ORdKX8he%2BxPCtMJ%2FoqjGfh53g5z4Vc94e8DryVvHpIMap35mpRLw%2FqFxdR40cm7%2BZq4JeiionWsWPT3ZiDMyP%2FOpiraSNwNxWikBbgGI4%2BQwkDrAzjtPScX53Grv3&X-Amz-Signature=e566e4f9035219b1a8f70973dba85033753706643713d5804df93ef4c7ebc6db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
